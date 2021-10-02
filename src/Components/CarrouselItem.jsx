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

    const clearString = (str) =>{
        str=str.replace(/<br>/gi, "\n");
        str=str.replace(/<p>/gi, "\n");
        str=str.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, " $2 (Link->$1) ");
        str=str.replace(/<(?:.|\s)*?>/g, "");
        str=str.replace(/\&nbsp;/g, '');
        return str;

    } 
    console.log(id);
    return (
        <>
            <div class={"carousel-item  " + active} >
                <img class="d-block w-100" src={imgsrc} alt="First slide"/>
                <div class="carousel-caption header highlight ">
                    <div class="title-clamp">
                        <h1> 
                            <strong className="brand-name"> {clearString(title)}</strong>
                        </h1>
                    </div>
                    <div class="line-clamp">
                        <h2 className="my-3">
                            {clearString(desc)}
                        </h2>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default CarrouselItem;
