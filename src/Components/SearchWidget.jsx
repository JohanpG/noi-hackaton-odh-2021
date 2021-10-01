import React from 'react';
import { NavLink } from "react-router-dom";

const SearchWidget = ({ 
   
}) => {

    return (
        <>
            <div className="container-md mb-5">
                <div className="card">
                    <iframe src="https://booking.skyalps.com/widget/searchelement.php?action=avl,fnd,ock&direction=horizontal&lang=en" frameborder="0" width="100%" height="500"></iframe>
                </div>
            </div>
        </>
    )
}

export default SearchWidget;
