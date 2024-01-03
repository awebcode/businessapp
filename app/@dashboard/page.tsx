import React from "react";
import { wait } from "../actions/wait";

const page = async () => {
  // await wait(5000);
  return (
    <div className="h-[600px] w-[600px] rounded-md bg-yellow-500 m-10">Dashboard</div>
  );
};

export default page;
