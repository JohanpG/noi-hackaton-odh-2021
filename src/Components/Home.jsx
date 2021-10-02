import React, { useState, useEffect } from "react";
import home from "../images/home.svg";
import Common from './Common';
import Card from './Card';
import SearchWidget from './SearchWidget';
import MeteoWidget from './MeteoWidget';
import HomeCarrousel from './HomeCarrousel';
import CarrouselItem from './CarrouselItem';
import Loader from './Loader';
import EventsAPI from '../services/EventsAPI'
import defaultImage from "../images/Hikestrips.jpg";
//import moment from 'moment';
import moment from 'moment-timezone';

const Home = () => {
    const [events, setEvents] = useState(null);
    const [eventTypes, setEventTypes] = useState(null);
    const [activities, setActivities] = useState(null);

    const eventfilters = {
        pagesize : 8,
        begindate : moment(new Date(), "DD-MM-YYYY").add(2*7, 'days').format(),
        enddate : moment(new Date(), "DD-MM-YYYY").add(6*7, 'days').format(),
        langfilter : 'en'
    }

    const activitiesfilters = {
        pagesize : 4,
        type:2,// Winter
        langfilter : 'en'
    }
    useEffect(() => {
        //console.log(EventsAPI);
        getData();
      }, []);

    async function getData(){
       let typesFromAPI = await EventsAPI.getEventTypes();
       console.log(typesFromAPI);
       setEventTypes(typesFromAPI);

       let eventsFromAPI = await EventsAPI.getEvents(eventfilters);
       console.log(eventsFromAPI);
       setEvents(eventsFromAPI);

       let activitiesFromAPI = await EventsAPI.getActivities(activitiesfilters);
        console.log(activitiesFromAPI);
        setActivities(activitiesFromAPI);
    }

    return (
        <>
            {activities ? (
                 <HomeCarrousel 
                 activities = {activities}
                 language = {eventfilters.langfilter}
                 />
            ) : ( <Loader/>)}

            {false ? (
                <Common 
                name={events.Items[0].Detail[eventfilters.langfilter].Title} 
                imgsrc={home} 
                isCompName={true}
                compName="Sky Alps"
                visit='/services' 
                btnname="Get Started" 
            />
            ) : ( null)}
            <div className="my-5">
                <h1 className="text-center">Where to go?</h1>
            </div>
            <SearchWidget/>
            <div className="my-5">
                <h1 className="text-center">What to do?</h1>
            </div>
            {events ? (
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                events.Items.map((val, index) => {
                                        return <Card 
                                            imgsrc={val.ImageGallery.length > 0 ? val.ImageGallery[0] : require('../images/' + eventTypes.filter(a => a.Id == val.TopicRIDs[0])[0].TypeDesc[eventfilters.langfilter].replace("/", "").replace(" ", "") + '.jpg')}
                                            desc = {val.Detail[eventfilters.langfilter].BaseText}
                                            title={val.Detail[eventfilters.langfilter].Title}
                                            dateBegin={moment(val.DateBegin).tz("Europe/Berlin").format("YYYY-MM-DD hh:mm A")}
                                            key={index}
                                        />
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : ( <Loader/>)}

            <MeteoWidget/>
        </>
    )
}

export default Home;