import axios from 'axios';
import { API_DATA } from "../constants";

const functions = {
  async getEvents(filters, langfilter){
    console.log(filters);
    const params = {
      pagenumber: { toJSON: () => 1 },
      pagesize: { toJSON: () => filters.pagesize },
      active: { toJSON: () => true },
      odhactive: { toJSON: () => true },
      begindate: filters.begindate,
      enddate: filters.enddate,
      sort: 'asc',
      locfilter: filters.LocationInfo,
      //langfilter: langfilter,
      removenullvalues: { toJSON: () => false }
    };
    let url = API_DATA.OPEN_DATA_HUB_API_EVENT_ENDPOINT

    try{
      const response = await  axios.get(url,{params})
      //console.log(response.data);
      return response.data
    } catch (err){
      console.error(err);
    }
  },
  async getEventTypes(lang){
    const params = {
      removenullvalues: { toJSON: () => false }
    };
    let url = API_DATA.OPEN_DATA_HUB_API_EVENT_TOPICS_ENDPOINT

    try{
      const response = await  axios.get(url,{params})
      //console.log(response.data);
      return response.data
    } catch (err){
      console.error(err);
    }
  },

  async getEventTypeByID(id){
    console.log(id);
    const params = {
      id:id,
      langfilter:'en',
      removenullvalues: { toJSON: () => false }
    };
    let url = API_DATA.OPEN_DATA_HUB_API_EVENT_TOPICS_ENDPOINT

    try{
      const response = await  axios.get(url,{params})
      //console.log(response.data);
      return response.data
    } catch (err){
      console.error(err);
    }
  },

  async getActivities(filters, langfilter){
    //console.log(filters, langfilter);
    const params = {
      pagenumber: { toJSON: () => 1 },
      pagesize: { toJSON: () => filters.pagesize },
      type: { toJSON: () => filters.type },
      odhactive: { toJSON: () => true },
      locfilter : filters.LocationInfo,
      //language: langfilter,
      removenullvalues: { toJSON: () => false }
    };
    let url = API_DATA.OPEN_DATA_HUB_API_ACTIVITY_POI_ENDPOINT

    try{
      const response = await  axios.get(url,{params})
      //console.log(response.data);
      return response.data
    } catch (err){
      console.error(err);
    }
  },

  async getAccomodations(filters, langfilter){
    //console.log(filters, langfilter);
    const params = {
      pagenumber: { toJSON: () => 1 },
      pagesize: { toJSON: () => filters.pagesize },
      arrival: filters.begindate,
      departure: filters.enddate,
      roominfo: '1-18,18',
      locfilter: filters.LocationInfo,
      bokfilter: 'hsv',
      source: 'sinfo',
      removenullvalues: { toJSON: () => false },
      availabilitycheck : { toJSON: () => true },
      availabilitychecklanguage : langfilter
    };
    let url = API_DATA.OPEN_DATA_HUB_API_ACTIVITY_POI_ENDPOINT

    try{
      const response = await  axios.get(url,{params})
      //console.log(response.data);
      return response.data
    } catch (err){
      console.error(err);
    }
  }
}

export default functions;
