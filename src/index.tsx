import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.scss";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const container = document.getElementById("app");
if (container) {
  const root = createRoot(container);
  root.render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  );
} else {
  window.alert("Error loading app !");
}
