import React, { useState, useContext } from "react";
import { useUser } from "@clerk/clerk-react";
import { financialContext } from "../contexts/FinancialContext";

const BalForm = ({ show, setShow }) => {
  if (!show) {
    return null;
  }

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [deadline, setDeadline] = useState("");
  const { user } = useUser();
  const { addSavRecord } = useContext(financialContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      userId: user?.id,
      date: new Date(),
      title,
      amount: parseFloat(amount),
      deadline,
    };

    addSavRecord(newRecord);
    setTitle("");
    setAmount("");
  };
  return (
    <div className="fixed inset-0 z-40 backdrop-blur-xs flex items-center justify-center">
      <div className="flex flex-col w-3/4 h-2/3">
        <button
          className="text-white self-end hover:cursor-pointer"
          onClick={() => setShow(false)}
        >
          x
        </button>
        <div className="w-full h-full bg-white rounded-xl p-7 overflow-y-scroll overflow-x-clip no-scrollbar">
          <form
            className="text-black flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label>title:</label>
              <input
                className="border-2 rounded-xl p-2"
                name=""
                id=""
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Amount:</label>
              <input
                className="p-4 border-2 rounded-xl w-1/2 h-5"
                type="number"
                placeholder="amount"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Deadline:</label>
              <input
                className="p-4 border-2 rounded-xl w-1/2 h-5"
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                placeholder="deadline"
                required
              />
            </div>
            <button className="justify-center items-center bg-gradient-to-r from-red-500 to-yellow-500 border-2 hover:bg-gradient-to-l hover:cursor-pointer duration-500 transition  border-black rounded-lg px-2">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BalForm;
