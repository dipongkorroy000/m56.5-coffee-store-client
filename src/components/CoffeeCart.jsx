import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCart = ({ coffee, setCoffee, coffees }) => {
  const { _id, name, photo, price, quantity } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start deleting the coffee
        fetch(`https://coffee-store-server-liart-rho.vercel.app/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));

        Swal.fire({
          title: "Deleted!",
          text: "Your coffee has been deleted.",
          icon: "success",
        });
        const remainingCoffees = coffees.filter((cof) => cof._id !== id);
        setCoffee(remainingCoffees);
      }
    });
  };
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
          <div className="">
            <div className="flex flex-col space-y-2">
              <Link to={`/coffees/${_id}`}>
                <button className="btn btn-secondary">View</button>
              </Link>
              <Link to={`updateCoffee/${_id}`}>
                <button className="btn btn-secondary">Update</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-accent"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCart;
