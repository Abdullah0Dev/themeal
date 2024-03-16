import axios from "axios";



const BASE_URL = 'www.themealdb.com/api/json/v1/1/'
 
export const fetchFood = async (url) => {
    try {
      const response = await axios.get( `https://${BASE_URL}`  + url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Failed to fetch data');
    }  
  };