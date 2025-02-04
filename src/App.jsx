import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import DashboardData from "./components/DashboardData";
import Summary from "./components/Wallet";
import Balance from "./components/Balance";
import { HiWallet } from "react-icons/hi2";
import Wallet from "./components/Wallet";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/" element={<DashboardData />} />
          <Route path="/dashboard/balance" element={<Balance />} />
          <Route path="/dashboard/wallet" element={<Wallet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
