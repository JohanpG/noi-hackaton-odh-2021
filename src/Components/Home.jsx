import React, { useState, useEffect } from "react";
import home from "../images/home.svg";
import Common from './Common';
import Card from './Card';
import SearchWidget from './SearchWidget';
import MeteoWidget from './MeteoWidget';
import HomeCarrousel from './HomeCarrousel';
import Loader from './Loader';
import EventsAPI from '../services/EventsAPI'
//import moment from 'moment';
import moment from 'moment-timezone';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import $ from 'jquery'

const Home = () => {
    const { t, i18n } = useTranslation();
    const [events, setEvents] = useState(null);
    const [eventTypes, setEventTypes] = useState(null);
    const [activities, setActivities] = useState(null);
    const [lang, setLang] = useState(null);
    const d = new Date();

    var seasonArray = [
        {name: 'Spring', bitmask: 4, date: new Date(d.getFullYear(),2,(d.getFullYear() % 4 === 0) ? 19 : 20).getTime()},
        {name: 'Summer', bitmask: 4, date: new Date(d.getFullYear(),5,(d.getFullYear() % 4 === 0) ? 20 : 21).getTime()},
        {name: 'Autumn', bitmask: 2, date: new Date(d.getFullYear(),8,(d.getFullYear() % 4 === 0) ? 22 : 23).getTime()},
        {name: 'Winter', bitmask: 2, date: new Date(d.getFullYear(),11,(d.getFullYear() % 4 === 0) ? 20 : 21).getTime()}
    ];
    const season = seasonArray.filter(({ date }) => date <= d).slice(-1)[0]
    console.log(new Date(d).toLocaleDateString(), season.name); 

    const eventfilters = {
        pagesize : 8,
        begindate : moment(new Date(), "DD-MM-YYYY").add(2*7, 'days').format(),
        enddate : moment(new Date(), "DD-MM-YYYY").add(6*7, 'days').format(),
        LocationInfo: "tvs522822BE51CA11D18F1400A02427D15E,regD2633A20C24E11D18F1B006097B8970B,mun418E5CC913764648802DD2BE30AD91AC,fra79CBD7ED51C911D18F1400A02427D15E" //Merano  tvs522822BE51CA11D18F1400A02427D15E,regD2633A20C24E11D18F1B006097B8970B,mun418E5CC913764648802DD2BE30AD91AC,fra79CBD7ED51C911D18F1400A02427D15E -- brixen regD2633A1DC24E11D18F1B006097B8970B,tvs5228229751CA11D18F1400A02427D15E,mun2B2B22E275734BB990DE4A3FC98C6A18,fra79CBD69151C911D18F1400A02427D15E
    }


    let jQuerycode = () => {
        if( $("#flightDepart")){
            $("#flightDepart").change(function () {
                console.log("Changee date : "+ this.value);
                var end = this.value;
            });
        }
      }
    

    const activitiesfilters = {
        pagesize : 4,
        type:season.bitmask// 2 Winter
        //LocationInfo: "tvs522822BE51CA11D18F1400A02427D15E,regD2633A20C24E11D18F1B006097B8970B,mun418E5CC913764648802DD2BE30AD91AC,fra79CBD7ED51C911D18F1400A02427D15E" //Merano  tvs522822BE51CA11D18F1400A02427D15E,regD2633A20C24E11D18F1B006097B8970B,mun418E5CC913764648802DD2BE30AD91AC,fra79CBD7ED51C911D18F1400A02427D15E -- brixen regD2633A1DC24E11D18F1B006097B8970B,tvs5228229751CA11D18F1400A02427D15E,mun2B2B22E275734BB990DE4A3FC98C6A18,fra79CBD69151C911D18F1400A02427D15E
    }
    useEffect(() => {
        //console.log(EventsAPI);
        getData();
        jQuerycode();
      }, []);

    async function getData(){
       let typesFromAPI = await EventsAPI.getEventTypes();
       //console.log(typesFromAPI);
       setEventTypes(typesFromAPI);

       let eventsFromAPI = await EventsAPI.getEvents(eventfilters);
       console.log(eventsFromAPI);
       setEvents(eventsFromAPI);

       let activitiesFromAPI = await EventsAPI.getActivities(activitiesfilters);
        //console.log(activitiesFromAPI);
        setActivities(activitiesFromAPI);
    }

    return (
        <>
            {activities ? (
                 <HomeCarrousel 
                 activities = {activities}
                 language = {i18n.language}
                 />
            ) : ( <Loader/>)}

            {false ? (
                <Common 
                name={events.Items[0].Detail[i18n.language].Title} 
                imgsrc={home} 
                isCompName={true}
                compName="Sky Alps"
                visit='/services' 
                btnname="Get Started" 
            />
            ) : ( null)}
            <div className="my-5">
                <h1 className="text-center">{t('description.whereToGo')}</h1>
            </div>
            <SearchWidget/>
            <div className="my-5">
                <h1 className="text-center">{t('description.whatToDo')}</h1>
            </div>
            {events ? (
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                events.Items.map((val, index) => {
                                        if(val.Detail[i18n.language]){
                                            return <Card 
                                                imgsrc={val.ImageGallery.length > 0 ? val.ImageGallery[0] : require('../images/' + eventTypes.filter(a => a.Id == val.TopicRIDs[0])[0].TypeDesc['en'].replace("/", "").replace(" ", "") + '.jpg')}
                                                desc = {val.Detail[i18n.language].BaseText ? val.Detail[i18n.language].BaseText : ""}
                                                title={val.Detail[i18n.language].Title? val.Detail[i18n.language].Title: ""}
                                                dateBegin={moment(val.DateBegin).tz("Europe/Berlin").format("YYYY-MM-DD hh:mm A")}
                                                key={index}
                                            />
                                        }
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