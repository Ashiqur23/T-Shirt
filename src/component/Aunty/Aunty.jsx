import React, { useContext } from 'react';
import { MoneyContext } from '../Granpa/Granpa';

const Aunty = () => {
    const {money , setMoney} = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty money: {money}</h2>
            <button onClick={() => setMoney(money + 10)}>Poisa</button>
        </div>
    );
};

export default Aunty;