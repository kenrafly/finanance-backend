import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div className="flex-1 ml-12 md:ml-52 overflow-y-auto h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
