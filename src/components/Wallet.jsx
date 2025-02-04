import React, { useContext, useState } from "react";
import { financialContext } from "../contexts/FinancialContext";
import EditableWallet from "./EditableWallet";
import WalForm from "./walForm";

const Wallet = () => {
  const [show, setShow] = useState(false);
  const { walRecords, putWalRecord, delWalRecord } =
    useContext(financialContext);
  console.log(walRecords);

  return (
    <div className="bg-black h-full p-4 ">
      <div className="flex justify-between gap-2">
        <h1 className="text-white font-bold text-2xl">Wallet</h1>
        <button
          setShow
          className="bg-gradient-to-r from-red-500 to-yellow-500 border-2 hover:bg-gradient-to-l hover:cursor-pointer hover:scale-110 duration-500 hover:border-amber-300 transition  border-white rounded-lg px-2 "
          onClick={() => setShow(true)}
        >
          Add Data
        </button>
      </div>
      <div className="flex flex-col w-full  p-4 rounded-2xl gap-4 bg-gray-800 mt-4">
        <h1 className="text-white text-2xl font-bold">Wallet Balance</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {walRecords.map((wallet) => (
            <EditableWallet
              key={wallet._id}
              wallet={wallet}
              updateData={putWalRecord}
              deleteData={delWalRecord}
            />
          ))}
        </div>
      </div>
      <WalForm show={show} setShow={setShow} />
    </div>
  );
};

export default Wallet;
