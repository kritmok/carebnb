import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1 id="cardsection">Begin your journey today!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpeg"
              text="Eiffel Tower, Paris"
              label="France"
              path="/sign-in"
            />
            <CardItem
              src="images/img-2.jpeg"
              text="The Colosseum, Rome"
              label="Italy"
              path="/sign-in"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpeg"
              text="The Great Pyramids, Giza"
              label="Egypt"
              path="/sign-in"
            />
            <CardItem
              src="images/img-4.jpeg"
              text="Machu Picchu, Cordillera"
              label="Peru"
              path="/sign-in"
            />
            <CardItem
              src="images/img-5.jpeg"
              text="The Acropolis, Athens"
              label="Greece"
              path="/sign-in"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
