import React from 'react';
import { useContext } from 'react';
import travelContext from '../context/travel/TravelContext';

function Alert(props) {
    const context = useContext(travelContext);
    const { alert } = context;
    // const alert = {type: "success", msg: "this is notification" };

    const capitalize = (word) => {
        if (word === "danger") {
            word = "error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <>
            <div >
                {alert && <div style={{ height: '50px', width: "100vw", zIndex: "100", position: "fixed", marginTop: "40px" }} className={`alert alert-${alert.type} alert-dismissible fade show d-flex justify-content-center align-items-center`} role="alert">
                    <strong>{capitalize(alert.type)}</strong>: {alert.msg}
                </div>}
            </div>
        </>
    )
}

export default Alert