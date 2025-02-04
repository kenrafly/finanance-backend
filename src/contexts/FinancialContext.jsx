import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

export const financialContext = createContext(null);

export const FinancialContextProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const [savRecords, setSavRecords] = useState([]);
  const [walRecords, setWalRecords] = useState([]);
  const url = "https://financebackend-k2vw.vercel.app";
  const { user } = useUser();

  const fetchRecords = async () => {
    if (!user) return;
    console.log(user.id);
    const response = await axios.get(`${url}/api/getAllByUserId/${user.id}`);
    if (response.data) {
      setRecords(response.data);
    }
  };

  const fetchSavRecords = async () => {
    if (!user) return;
    console.log(user.id);
    const response = await axios.get(
      `${url}/api/bal/getAllByUserId/${user.id}`
    );
    if (response.data) {
      setSavRecords(response.data);
    }
  };
  const fetchWalRecords = async () => {
    if (!user) return;
    console.log(user.id);
    const response = await axios.get(
      `${url}/api/wal/getAllByUserId/${user.id}`
    );
    if (response.data) {
      setWalRecords(response.data);
    }
  };

  useEffect(() => {
    fetchRecords();
    fetchSavRecords();
    fetchWalRecords();
  }, [user]);

  const addRecord = async (newRecord) => {
    try {
      const response = await axios.post(`${url}/api`, newRecord);
      setRecords([...records, response.data]);
      fetchRecords();
    } catch (error) {
      console.error(error);
    }
  };
  const addSavRecord = async (newRecord) => {
    try {
      const response = await axios.post(`${url}/api/bal`, newRecord);
      setSavRecords([...records, response.data]);
      fetchSavRecords();
    } catch (error) {
      console.error(error);
    }
  };
  const addWalRecord = async (newRecord) => {
    try {
      const response = await axios.post(`${url}/api/wal`, newRecord);
      setWalRecords([...records, response.data]);
      fetchWalRecords();
    } catch (error) {
      console.error(error);
    }
  };
  const putRecord = async (id, newRecord) => {
    try {
      const response = await axios.put(`${url}/api/${id}`, newRecord);
      setRecords((prev) =>
        prev.map((record) => {
          if (record._id === id) {
            return response.data;
          } else {
            return record;
          }
        })
      );
      fetchRecords();
    } catch (error) {
      console.error(error);
    }
  };
  const putSavRecord = async (id, newRecord) => {
    try {
      const response = await axios.put(`${url}/api/bal/${id}`, newRecord);
      setSavRecords((prev) =>
        prev.map((record) => {
          if (record._id === id) {
            return response.data;
          } else {
            return record;
          }
        })
      );
      fetchSavRecords();
    } catch (error) {
      console.error(error);
    }
  };
  const putWalRecord = async (id, newRecord) => {
    try {
      const response = await axios.put(`${url}/api/wal/${id}`, newRecord);
      setWalRecords((prev) =>
        prev.map((record) => {
          if (record._id === id) {
            return response.data;
          } else {
            return record;
          }
        })
      );
      fetchWalRecords();
    } catch (error) {
      console.error(error);
    }
  };
  const delRecord = async (id) => {
    try {
      const response = await axios.delete(`${url}/api/${id}`);
      setRecords((prev) =>
        prev.filter((record) => record._id !== response.data._id)
      );
      fetchRecords();
    } catch (error) {
      console.error(error);
    }
  };
  const delSavRecord = async (id) => {
    try {
      const response = await axios.delete(`${url}/api/bal/${id}`);
      setSavRecords((prev) =>
        prev.filter((record) => record._id !== response.data._id)
      );
      fetchSavRecords();
    } catch (error) {
      console.error(error);
    }
  };
  const delWalRecord = async (id) => {
    try {
      const response = await axios.delete(`${url}/api/wal/${id}`);
      setWalRecords((prev) =>
        prev.filter((record) => record._id !== response.data._id)
      );
      fetchWalRecords();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <financialContext.Provider
      value={{
        addSavRecord,
        putSavRecord,
        delSavRecord,
        addWalRecord,
        putWalRecord,
        delWalRecord,
        walRecords,
        savRecords,
        records,
        addRecord,
        putRecord,
        delRecord,
      }}
    >
      {children}
    </financialContext.Provider>
  );
};
