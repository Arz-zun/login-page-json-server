import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className=" relative h-screen">
      <div className=" bg-blue-500 flex items-center justify-evenly  ">
        <div className="font-bold   text-center text-white capitalize">
          <div>hey</div>
          <div>Role:</div>
        </div>
        <div className=" font-bold  py-10  text-center text-white ">
          {" "}
          Dashboard
        </div>
        <button className=" text-xl text-white mx-10 bg-blue-800 p-2 rounded-full">
          <BiLogOut />
        </button>
      </div>

      <div className=" mx-auto max-w-6xl w-full border mt-6">
        <div className=" grid grid-cols-9 p-2 bg-gray-700 text-white font-bold">
          <div className="">S.No.</div>
          <div className="">Firstname</div>
          <div className="">Lastname</div>
          <div className=" col-span-2">Email</div>
          <div className="">Phone</div>
          <div className="">Active</div>
          <div className="">Role</div>

          <div className="">Actions</div>
        </div>
        <div className="grid grid-cols-9 p-2  font-semibold">
          <div className=" mb-3">1</div>
          <div>arjun</div>
          <div>chaudhary</div>
          <div className=" col-span-2">arjunchaudhary</div>
          <div>9845222</div>
          <div className="capitalize">Active</div>
          <div className="capitalize">Admin</div>
        </div>
      </div>

      <div className=" max-w-4xl w-full mx-auto my-9 font-semibold">
        <div>Total Users: 32</div>
        <div>
          Total Active Users: <span>10</span>
        </div>
        <div>
          {" "}
          InActive Users: <span>54</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
