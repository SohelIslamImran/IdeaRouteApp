import { useContext, useEffect } from "react";
import { Alert, LogBox } from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "../config/firebaseConfig";
import { AuthContext } from "../auth/AuthContextProvider";
import { StoreContext } from "./StoreContextProvider";

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const useStore = () => {
  const { user, avatar } = useContext(AuthContext);
  const { setPosts, setIsLoading, setError } = useContext(StoreContext);

  useEffect(() => {
    LogBox.ignoreLogs(["Setting a timer"]);
  }, []);

  const storeAvatar = async (avatarUri, uid) => {
    try {
      const filepath = `avatars/${uid}`;
      const remoteUri = await uploadImage(avatarUri, filepath);
      return remoteUri;
    } catch (error) {
      setError(error.toString());
    }
  };

  const getAvatar = async (uid) => {
    try {
      const storage = firebase.storage();
      const storageRef = storage.ref();
      const url = await storageRef
        .child(`avatars/${uid || user?.uid}`)
        .getDownloadURL();
      return url;
    } catch (error) {}
  };

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const posts = [];
      const querySnapshot = await firebase
        .firestore()
        .collection("posts")
        .get();
      querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
      });
      setPosts(posts);
      setIsLoading(false);
    } catch (error) {
      setError(error.toString());
      setIsLoading(false);
    }
  };

  const getUserPosts = async () => {
    try {
      setIsLoading(true);
      const posts = [];
      const querySnapshot = await firebase
        .firestore()
        .collection("posts")
        .where("userId", "==", user?.uid)
        .get();
      querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
      });
      setIsLoading(false);
      return posts;
    } catch (error) {
      setError(error.toString());
      setIsLoading(false);
    }
  };

  const addPost = async (text, imageUri) => {
    setIsLoading(true);
    const filepath = `photos/${user.uid}/${Date.now()}`;
    const remoteUri = await uploadImage(imageUri, filepath);

    const post = {
      userId: user.uid,
      userName: user.name,
      userImg: avatar,
      text,
      image: remoteUri,
      time: firebase.firestore.Timestamp.fromDate(new Date()),
      likes: null,
      comments: null,
    };

    try {
      await firebase.firestore().collection("posts").add(post);
      getPosts();
      getUserPosts();
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const uploadImage = async (uri, filepath) => {
    if (!uri) {
      return null;
    }

    const res = await fetch(uri);
    const file = await res.blob();

    const upload = firebase.storage().ref(filepath);
    const task = upload.put(file);
    task.on(
      "state_changed",
      (snapshot) => {},
      (err) => {
        setError(err);
      }
    );

    try {
      await task;
      const url = await upload.getDownloadURL();
      return url;
    } catch (error) {
      setError(error);
    }
  };

  const deletePost = async (postId) => {
    setIsLoading(true);
    try {
      const documentSnapshot = await firebase
        .firestore()
        .collection("posts")
        .doc(postId)
        .get();

      if (documentSnapshot.exists) {
        const { postImg } = documentSnapshot.data();

        if (postImg != null) {
          const storageRef = firebase.storage().refFromURL(postImg);
          const imageRef = firebase.storage().ref(storageRef.fullPath);

          try {
            await imageRef.delete();
            deleteFirestoreData(postId);
          } catch (error) {
            setError("Error while deleting the image. ", error);
          }
        } else {
          deleteFirestoreData(postId);
        }
      }
      getPosts();
      getUserPosts();
      setIsLoading(false);
    } catch (error) {
      setError("Error deleting post.", error);
      setIsLoading(false);
    }
  };

  const deleteFirestoreData = async (postId) => {
    try {
      await firebase.firestore().collection("posts").doc(postId).delete();
      Alert.alert("Post deleted!", "Your post has been deleted successfully!");
    } catch (error) {
      setError("Error deleting post.", error);
      setIsLoading(false);
    }
  };

  return {
    storeAvatar,
    getAvatar,
    getPosts,
    getUserPosts,
    addPost,
    deletePost,
  };
};

export default useStore;
