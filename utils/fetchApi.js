import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': 'acb47bb946msh05bf6d0758119fdp10dff1jsn73bafd8fdd96',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
 } )
    
  return data;
}







/* 
  }*/