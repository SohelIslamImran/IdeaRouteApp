import React, { useContext, useEffect } from "react";
import { FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import useStore from "../firestore/useStore";
import PostCard from "../components/PostCard";
import SafeArea from "../styles/SafeArea";
import { Container, FeedHeader, HeaderTitle } from "../styles/FeedStyles";
import { StoreContext } from "../firestore/StoreContextProvider";
import { Loader } from "../styles/Loader";
import { AuthContext } from "../auth/AuthContextProvider";

const HomeScreen = () => {
  const { getPosts, deletePost } = useStore();
  const { isLoading, posts } = useContext(StoreContext);
  const { isLoading: userLoading } = useContext(AuthContext);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      {(userLoading || isLoading) && <Loader />}
      <SafeArea>
        <FeedHeader>
          <HeaderTitle>Feed</HeaderTitle>
        </FeedHeader>
        <Container>
          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <PostCard
                item={item}
                onDelete={deletePost}
                onPress={() => null}
              />
            )}
            keyExtractor={({ id }) => id}
            showsVerticalScrollIndicator={false}
          />
        </Container>
      </SafeArea>
    </>
  );
};

export default HomeScreen;
