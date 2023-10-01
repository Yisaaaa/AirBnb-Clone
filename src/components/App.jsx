import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Hero from "./Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
