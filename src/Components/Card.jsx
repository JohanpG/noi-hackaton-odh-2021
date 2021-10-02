import React from 'react';
import { NavLink } from "react-router-dom";

const Card = ({ 
    imgsrc,
    title,
    desc,
    dateBegin
}) => {

    //console.log(imgsrc);

    return (
        <>
            <div className="col-md-3 col-10 mx-auto ">
                <div className="card card-event h-100" >
                    <div class="img-hover">
                        <img src={imgsrc.default? imgsrc.default : imgsrc} className="card-img-top" id="coverImg" alt="card" />
                    </div>
                    <div className="card-body">
                        <div class="title-clamp">
                            <h5 className="card-title">{title}</h5>
                        </div>
                        <div class="line-clamp">
                            <p className="card-text">{desc}</p>
                        </div>
                        <p class="card-text"><small class="text-muted">{dateBegin}</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
