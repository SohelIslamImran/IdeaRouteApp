import React, { useState, createContext } from "react";
import { Alert } from "react-native";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  error && Alert.alert("Error", error);

  return (
    <StoreContext.Provider
      value={{
        posts,
        setPosts,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
