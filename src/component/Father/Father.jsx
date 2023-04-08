import React, { useContext } from 'react';
import { MoneyContext } from '../Granpa/Granpa';

const Father = () => {
    const {money} = useContext(MoneyContext)
    console.log(money)
    return (
        <div>
            <h2>Father</h2>
        </div>
    );
};

export default Father;