import React from "react";

const OfferCard = ({ title, text, image }) => {
  return (
    <div className="text-sm bg-primary    p-5 rounded-full flex flex-col justify-center items-center shadow-xl shadow-foreground size-40 text-center ">
      <img src={image} alt="gear" className="size-20 max-md:size-9" />

      <h2 className="font-bold pb-2">{title}</h2>
      {/* <p>{text}</p> */}
    </div>
  );
};

export default OfferCard;
