import { useEffect, useState } from "react";
import travelContext from "./TravelContext";

const TravelState = (props) => {

    // const authToken = localStorage.getItem('token');

    // let host = "http://localhost:5000"; // Default host for development

    // if (process.env.NODE_ENV === 'production') {
    //     host = "https://travel-backend-rho.vercel.app"; // API host for production
    // }

    // Alert
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }




    return (
        <travelContext.Provider value={{
            alert, showAlert, 
        }}>
            {props.children}
        </travelContext.Provider>
    )
}

export default TravelState;