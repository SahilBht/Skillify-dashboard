import React from "react";
import { Search, Upload, Bell, MessageCircleMore, Activity } from "lucide-react";

function Dashboard() {
  return (
    <div className=" flex mt-14 justify-between items-center space-x-8">
    <div className="ml-40">

    </div>
      <div className="flex  bg-[#edede9]  rounded px-2 py-1 focus:outline-none">
        <Search className="opacity-20" />
        <input className="bg-[#edede9]" type="text" placeholder="Search" />
      </div>
      <button className="px-4 py-2 opacity-80 bg-orange-600 flex rounded-md justify-center text-white">
        <Upload className="" color="white" />
        <span className="ml-4">New Upload</span>
      </button>
      <div className="ml-auto flex space-x-8 px-5">
        <Bell className="border" />
        <MessageCircleMore className="border" />
        <Activity className="border" />
        <div className="flex flex-col items-center">
          <div className="flex">
            <p>TheMad</p>
            <img src="./../assets/logo.svg" />
          </div>
          <p className=" text-sm">Designation</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
