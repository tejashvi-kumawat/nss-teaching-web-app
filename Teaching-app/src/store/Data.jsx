import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  return (
    <DataContext.Provider value={{ user, setUser, events }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;