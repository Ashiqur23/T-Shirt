import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncel from "../Uncel/Uncel";
import Aunty from "../Aunty/Aunty";
import "./grandpa.css";
export const MoneyContext = createContext();

const Granpa = () => {
    const [ money , setMoney] = useState(0)
  return (
    <div className="grandpa">
      <h2>Grandpa money : {money}</h2>
      <section>
        <MoneyContext.Provider value={{money, setMoney}}>
          <Father></Father>
          <Uncel></Uncel>
          <Aunty></Aunty>
        </MoneyContext.Provider>
      </section>
    </div>
  );
};

export default Granpa;
