import React from 'react';
import defaultImage from "../images/Hikestrips1.jpg";
import CarrouselItem from './CarrouselItem';

const HomeCarrousel = ({ 
    activities,
    language
}) => {
    return (
        <>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                {
                activities.Items.map((val, id) => { 
                    if(val.Detail[language]){
                        return <CarrouselItem 
                                title={val.Detail[language].Title? val.Detail[language].Title : ""}
                                desc = {val.Detail[language].BaseText ? val.Detail[language].BaseText: ""}
                                id={id}
                                key = {id}
                            />
                        }
                    }
                )}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
                 
        </>
    )
}

export default HomeCarrousel;
