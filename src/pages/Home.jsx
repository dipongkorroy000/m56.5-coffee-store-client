import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCart from "../components/CoffeeCart";

const Home = () => {
  const InitialCoffees = useLoaderData();
  const [coffees, setCoffee] = useState(InitialCoffees);
  return (
    <div className="grid grid-cols-2 max-xl:grid-cols-1 mx-32 gap-10 my-10">
      {coffees.map((coffee) => (
        <CoffeeCart
          coffees={coffees}
          setCoffee={setCoffee}
          key={coffee._id}
          coffee={coffee}
        ></CoffeeCart>
      ))}
    </div>
  );
};

export default Home;
