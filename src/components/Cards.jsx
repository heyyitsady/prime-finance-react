import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

import Card from "./Card";

const details = [
  {
    id: 1,
    user: "Single",
    img: Single,
    price: "$149",
    p1: "500 GB Storage",
    p2: "1 Granted User",
    p3: "Send upto 2 GB",
  },
  {
    id: 2,
    user: "Two",
    img: Double,
    price: "$249",
    p1: "500 GB Storage",
    p2: "1 Granted User",
    p3: "Send upto 2 GB",
    mid: true,
  },
  {
    id: 3,
    user: "Three",
    img: Triple,
    price: "$329",
    p1: "500 GB Storage",
    p2: "1 Granted User",
    p3: "Send upto 2 GB",
  },
];

const Cards = () => {
  return (
    <div id="pricing" className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {details.map(({ id, ...otherDetails }) => (
          <Card key={id} {...otherDetails} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
