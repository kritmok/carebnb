import React from "react";
import CardItem from "../CardItem";

export default function Destinations() {
  return (
    <div className="cards">
      <h1 id="cardsection" style={{ color: "#091353" }}>
        Not sure where to go? Perfect.
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-6.jpeg"
              text="The Great Wall, Beijing"
              label="china"
              path="/sign-in"
            />
            <CardItem
              src="images/img-7.jpeg"
              text="Angkor Wat, Siem Reap "
              label="Cambodia"
              path="/sign-in"
            />
            <CardItem
              src="images/img-8.jpeg"
              text="Petra, Jordan"
              label="Jordan"
              path="/sign-in"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpeg"
              text="Grand Canyon, Arizona"
              label="USA"
              path="/sign-in"
            />
            <CardItem
              src="images/img-10.jpeg"
              text="Stonehenge, Wiltshire"
              label="England"
              path="/sign-in"
            />
            <CardItem
              src="images/img-11.jpeg"
              text="Borobudur, Muntilan"
              label="Indonesia"
              path="/sign-in"
            />
            <CardItem
              src="images/img-12.jpeg"
              text="Niagara Falls, Niagara Gorge"
              label="Canada"
              path="/sign-in"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
