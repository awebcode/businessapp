"use client";
import React from "react";
import isAuth from "./IsAuth";
const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <h1>Dashboard</h1>
    </div>
  );
};

export default isAuth(Dashboard);
