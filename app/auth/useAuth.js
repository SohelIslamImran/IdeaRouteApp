import { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "../config/firebaseConfig";
import { AuthContext } from "./AuthContextProvider";

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const useAuth = () => {
  const { setUser, setIsLoading, setError } = useContext(AuthContext);

  const logIn = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setLoggedInUser(user);
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

  const setLoggedInUser = ({ displayName, name, email }) => {
    setUser({ isSignedIn: true, name: displayName || name, email });
    setIsLoading(false);
  };

  return { logIn, register, logOut };
};

export default useAuth;
