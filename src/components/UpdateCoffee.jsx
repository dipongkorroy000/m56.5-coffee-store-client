import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, photo, price, quantity, details, supplier, taste } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updateCoffee = Object.fromEntries(formData.entries());
    console.log(updateCoffee);

    // send updated coffee to the db
    fetch(`http://localhost:3100/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="p-24">
      <div className="text-center space-y-4 p-12">
        <h1 className="text-5xl">Update Coffee</h1>
      </div>
      <form onSubmit={handleUpdateCoffee} action="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              defaultValue={name}
              name="name"
              className="input w-full"
              placeholder="Coffee name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input
              defaultValue={quantity}
              type="number"
              name="quantity"
              className="input w-full"
              placeholder="Quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Supplier</label>
            <input
              defaultValue={supplier}
              type="text"
              name="supplier"
              className="input w-full"
              placeholder="Supplier Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              defaultValue={taste}
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
              defaultValue={price}
              type="number"
              name="price"
              className="input w-full"
              placeholder="Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              defaultValue={details}
              type="text"
              name="details"
              className="input w-full"
              placeholder="Details"
            />
          </fieldset>
        </div>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
          <label className="label">Photo</label>
          <input
            defaultValue={photo}
            type="link"
            name="photo"
            className="input w-full"
            placeholder="Enter Photo URL"
          />
        </fieldset>
        <input className="btn w-full" type="submit" value="Update Coffee" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
