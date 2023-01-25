import React, { useState } from "react";
import UserContexto from "../context/UserContext";

const Wrapper = ({ children }) => {
  const [user, setUser] = useState("Derlis Cuba");

  return (
    <UserContexto.Provider value={{ user, setUser }}>
      {children}
    </UserContexto.Provider>
  );
};

export default Wrapper;
