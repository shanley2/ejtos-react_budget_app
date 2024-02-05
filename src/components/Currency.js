import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }
    return (
<div className='alert alert-secondary' style={{backgroundColor: "#79c672"}}>
    <label style={{color: "#ffffff"}}>Currency  
        <select className="custom-select" id="currencySelect" onChange={handleCurrencyChange} style={{backgroundColor: "#79c672", color:'white', border: "none", webkitAppearance: "none"}}>
            <option value="$" name="dollar" style={{color:"black"}}>$ Dollar</option>
            <option value="£" name="pound" style={{color:"black"}}>£ Pound</option>
            <option value="€" name="euro" style={{color:"black"}}>€ Euro</option>
            <option value="₹" name="rupee" style={{color:"black"}}>₹ Rupee</option>
        </select>
    </label>
</div>
    );
};

export default Currency;