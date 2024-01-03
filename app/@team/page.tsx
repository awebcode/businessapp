import React from "react";
import { wait } from "../actions/wait";

const page = async () => {
  // await wait(3000);
  return <div className="h-[600px] w-[600px] rounded-md bg-indigo-600 m-10">Team</div>;
};

export default page;
