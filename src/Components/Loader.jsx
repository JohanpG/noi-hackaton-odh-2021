import React from 'react';
import { NavLink } from "react-router-dom";

const Loader = ({ 
}) => {

    return (
        <>
            <div className="d-flex justify-content-center">
                <div class="spinner-grow text-primary" role="status">
                </div>
                <div class="spinner-grow text-primary" role="status">
                </div>
                <div class="spinner-grow text-primary" role="status">
                </div>
            </div>
        </>
    )
}

export default Loader;
