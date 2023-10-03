import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Hero from "./Hero";
import Card from "./Card";
import Data from "../data";

function App() {
  const cards = Data.map((card) => {
    return (
      <Card
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
      />
    );
  });

  return (
    <>
      <Header />
      <Hero />
      <div className="cards container">{cards}</div>
    </>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
