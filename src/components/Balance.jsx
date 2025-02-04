import React, { useState, useContext } from "react";
import BalForm from "./balForm";
import EditableGoal from "./EditableGoal";
import { financialContext } from "../contexts/FinancialContext";

const Balance = () => {
  const [show, setShow] = useState(false);
  const { savRecords, putSavRecord, delSavRecord } =
    useContext(financialContext);

  return (
    <div className="bg-black min-h-screen p-4 flex flex-col gap-5 ">
      <div className="flex justify-end gap-2">
        <button
          setShow
          className="bg-gradient-to-r from-red-500 to-yellow-500 border-2 hover:bg-gradient-to-l hover:cursor-pointer hover:scale-110 duration-500 hover:border-amber-300 transition  border-white rounded-lg px-2 "
          onClick={() => setShow(true)}
        >
          Add Data
        </button>
      </div>
      <div className="flex flex-col w-full h-full p-4 rounded-2xl gap-4 bg-gray-800">
        <h1 className="text-white text-2xl font-bold">Financial Goals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {savRecords.map((goal) => (
            <EditableGoal
              key={goal._id}
              goal={goal}
              updateData={putSavRecord}
              deleteData={delSavRecord}
            />
          ))}
        </div>
      </div>

      <BalForm show={show} setShow={setShow} />
    </div>
  );
};

export default Balance;
