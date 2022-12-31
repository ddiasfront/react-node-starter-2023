import React from "react";
import { Home } from "components/Pages";
import { Routes, Route } from "react-router-dom";
import { GraphQLClient } from "graphql-request";

const apiUrl = process.env.API || "";

export const clientInstance = new GraphQLClient(apiUrl, {
  headers: {},
});

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
