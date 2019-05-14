import React from "react";

import '../styles/button.scss';


const Button = ({sendData, cafeValue, cityValue, ratingValue}) => {
    return (
        <button
            className={`${cafeValue ? "sendButton30" : ""} ${
                cityValue ? "sendButton60" : ""
            }
            ${ratingValue ? "sendButton100" : ""}`}
            onClick={sendData}
            disabled={!cafeValue || !cityValue || !ratingValue}
        >
            Send Data To FireBase/Firestore
        </button>
    );
};

export default Button;
