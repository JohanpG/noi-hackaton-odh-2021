import React from 'react';
import home from "../images/home.svg";
import Common from './Common';
import Card from './Card';
import SearchWidget from './SearchWidget';
import HomeCarrousel from './HomeCarrousel';
import ServiceData from './ServiceData';

const Home = () => {
    return (
        <>
            <Common 
                name='Grow your business with' 
                imgsrc={home} 
                isCompName={true}
                compName="Sky Alps"
                visit='/services' 
                btnname="Get Started" 
            />
            <SearchWidget/>
            <div className="my-5">
                <h1 className="text-center">What to do?</h1>
            </div>
            <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                        ServiceData.map((val, index) => {
                                return <Card 
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    key={index}
                                />
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;