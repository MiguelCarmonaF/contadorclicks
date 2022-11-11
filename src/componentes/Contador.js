import React from "react";
import "../stylesheets/Contador.css";

function Contador({numeroClicks}){
    return (
        <div className="Contador">
            {numeroClicks}
        </div>
    )
}

export default Contador;
