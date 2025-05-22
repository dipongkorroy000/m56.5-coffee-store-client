import React from "react";
import { Outlet } from "react-router";
import Headers from "../components/Headers";

const Root = () => {
  return (
    <>
      <header>
        <Headers></Headers>
      </header>
      <main className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Root;
