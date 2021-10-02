import React from 'react';
import { NavLink } from "react-router-dom";

const MeteoWidget = ({ 
   
}) => {

    return (
        <>
            <div className="col-10 mx-auto">
                <div className="card-meteo">
                    <meteo-widget language_translation="en" forecast_days="4"></meteo-widget>
                </div>
            </div>
        </>
    )
}

export default MeteoWidget;
