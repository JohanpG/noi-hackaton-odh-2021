import React from 'react';
const CarrouselItem = ({ 
    imgsrc,
    title,
    desc,
    id
}) => {
    let active = '';
    if (id == 0) {
        active = 'active';
    }
    console.log('Entrooooo Item');
    console.log(id);
    return (
        <>
            <div class={"carousel-item " + active} >
                <img class="d-block w-100" src={imgsrc} alt="First slide"/>
                <div class="carousel-caption header ">
                    <h1> 
                        <strong className="brand-name"> {title}</strong>
                    </h1>
                    <h2 className="my-3">
                        {desc}
                    </h2>
                </div>
            </div>  
        </>
    )
}

export default CarrouselItem;
