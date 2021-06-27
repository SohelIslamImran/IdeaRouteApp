import { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "../config/firebaseConfig";
import { AuthContext } from "./AuthContextProvider";

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const useAuth = () => {
  const { setUser, setIsLoading, setError } = useContext(AuthContext);

  const logIn = (email, password) => {
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => setLoggedInUser(user))
      .catch((err) => {
        setError(err.toString());
        setIsLoading(false);
      });
  };

  const register = ({ name, email, password }) => {
    setIsLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => setLoggedInUser({ name, ...user }))
      .catch((err) => {
        setError(err.toString());
        setIsLoading(false);
      });

    firebase.auth().currentUser.updateProfile({ displayName: name });
  };

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
      });
  };

  const setLoggedInUser = ({ displayName, name, email }) => {
    const signedInUser = { isSignedIn: true, name: displayName || name, email };
    setUser(signedInUser);
    setIsLoading(false);
  };

  return { logIn, register, logOut };
};

export default useAuth;
