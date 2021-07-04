import { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "../config/firebaseConfig";
import { AuthContext } from "./AuthContextProvider";
import useStore from "../firestore/useStore";

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const useAuth = () => {
  const { avatar, setAvatar, setUser, setIsLoading, setError } =
    useContext(AuthContext);
  const { storeAvatar, getAvatar } = useStore();

  const logIn = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setLoggedInUser(user);
      const url = await getAvatar(user.uid);
      if (url) {
        setAvatar(url);
      } else {
        setAvatar("https://i.ibb.co/5GzXkwq/user.png");
      }
    } catch (error) {
      setError(error.toString());
      setIsLoading(false);
    }
  };

  const register = async ({ name, email, password }) => {
    setIsLoading(true);
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      setLoggedInUser({ name, ...user });
      if (avatar) {
        const avt = await storeAvatar(avatar, user.uid);
        setAvatar(avt);
      } else {
        setAvatar("https://i.ibb.co/5GzXkwq/user.png");
      }
      firebase.auth().currentUser.updateProfile({ displayName: name });
    } catch (error) {
      setError(error.toString());
      setIsLoading(false);
    }
  };

  const logOut = async () => {
    await firebase.auth().signOut();
    setUser(null);
    setError(null);
  };

  const setLoggedInUser = ({ displayName, name, email, uid }) => {
    setUser({ isSignedIn: true, name: displayName || name, email, uid });
    setIsLoading(false);
  };

  return { logIn, register, logOut };
};

export default useAuth;
