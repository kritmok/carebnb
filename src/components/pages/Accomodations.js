import React from "react";
import CardItem from "../CardItem";

export default function Accomodations() {
  return (
    <div className="cards">
      <h1 id="cardsection" style={{ color: "#091353" }}>
        Experience these amazing homes!
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/a-1.jpeg"
              text="Sidemen, Bali,"
              label="Indonesia"
              path="/sign-in"
            />
            <CardItem
              src="images/a-2.jpeg"
              text="El Nido,Philippines"
              label="Philippines"
              path="/sign-in"
            />
            <CardItem
              src="images/a-3.jpeg"
              text="Xishuangbanna, Yunnan"
              label="China"
              path="/sign-in"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/a-4.jpeg"
              text="Dainhin Island, Alabama"
              label="USA"
              path="/sign-in"
            />
            <CardItem
              src="images/a-5.jpeg"
              text="Gildeskål, Nordland"
              label="Norway"
              path="/sign-in"
            />
            <CardItem
              src="images/a-6.jpeg"
              text="Tiptree, Essex"
              label="United Kingdom"
              path="/sign-in"
            />
            <CardItem
              src="images/a-7.jpeg"
              text="Carvoeiro, Faro District"
              label="Portugal"
              path="/sign-in"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
