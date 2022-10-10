import React from "react";

const Card = (props) => {
  return (
    <div
      className={`w-full shadow-xl flex flex-col p-4 ${
        props.mid ? "bg-gray-100 my-8 md:my-0 md:mt-16" : "my-4"
      } rounded-lg hover:scale-105 duration-300`}
    >
      <img
        className="w-20 mx-auto mt-[-3rem] bg-transparent"
        src={props.img}
        alt=""
      />
      <h2 className="text-2xl font-bold text-center py-8">
        {props.user === "Single" ? `${props.user} User` : `${props.user} Users`}
      </h2>
      <p className="text-center text-4xl font-bold">{props.price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{props.p1}</p>
        <p className="py-2 border-b mx-8">{props.p2}</p>
        <p className="py-2 border-b mx-8">{props.p3}</p>
      </div>
      <button
        className={`${
          props.mid ? "bg-black text-[#00df9a]" : "bg-[#00df9a]"
        } w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
      >
        Start Trial
      </button>
    </div>
  );
};

export default Card;
