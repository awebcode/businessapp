import React from "react";
import Dashboard from "../Dashboard";
import { redirect } from "next/navigation";

const page = () => {
  const auth = false;
//   if (!auth) {
//     return redirect("/");
//   }
  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
};

export default page;
