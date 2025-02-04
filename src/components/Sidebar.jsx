import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { MdAccountBalanceWallet } from "react-icons/md";
import { HiDocumentChartBar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar (Fixed) */}
      <div className="fixed w-14 md:w-52 h-screen bg-black text-white border-r border-t border-amber-300 py-3">
        <ul className="flex flex-col items-center gap-1 ">
          <li className="w-full border-b border-amber-300 pb-4">
            <div className="flex items-center pl-5 hover:scale-110 duration-300 hover:cursor-pointer gap-5">
              <Link to="/dashboard/">
                <AiFillDashboard className="text-3xl" />
              </Link>
              <Link to="/dashboard/" className="hidden md:block">
                Dashboard
              </Link>
            </div>
          </li>
          <li className="w-full border-b border-amber-300 pb-4">
            <div className="flex items-center pl-5 hover:scale-110 duration-300 hover:cursor-pointer gap-5">
              <Link to="/dashboard/balance">
                <HiDocumentChartBar className="text-3xl" />
              </Link>
              <Link to="/dashboard/balance" className="hidden md:block">
                Goals
              </Link>
            </div>
          </li>
          <li className="w-full border-b border-amber-300 pb-4">
            <div className="flex items-center pl-5 hover:scale-110 duration-300 hover:cursor-pointer gap-5">
              <Link to="/dashboard/wallet">
                <MdAccountBalanceWallet className="text-3xl" />
              </Link>
              <Link to="/dashboard/wallet" className="hidden md:block">
                Wallet
              </Link>
            </div>
          </li>
        </ul>
      </div>

      {/* Main Content (Scrollable) */}
    </div>
  );
};

export default Sidebar;
