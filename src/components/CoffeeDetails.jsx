import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { _id, name, photo, price, quantity } = coffee;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm border">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex items-center justify-around w-full">
          <div>
            <h2 className="text-xl my-2">{name}</h2>
            <p>Price : {price}</p>
            <p>Quantity : {quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
