import React from "react";
import { useGetTheNewsArticlesQuery } from "../features/feeds/theNewsApi";
import { testValue } from "../features/feeds/theNewsApi";

const TheNewsTest = () => {
  const { data, isLoading, error } = useGetTheNewsArticlesQuery({
    categories: ["science", "environment", "technology"],
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading sources</p>;

  return <pre style={{ color: "white" }}>{JSON.stringify(data, null, 2)}</pre>;
  console.log("TEST VALUE:", testValue);
};

export default TheNewsTest;
