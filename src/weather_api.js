import axios from "axios";

export async function serviceWeather(city,days) {

    const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
    const API_KEY =  "3385a570adb94ff2a76174611230808";
                                              
    const params = new URLSearchParams ({

        key:API_KEY,
        q:city,
        days,
        lang:"uk"

    });

     try {

        const res = await axios.get(`${BASE_URL}?${params}`);
          
        return res.data;

     } catch (error) {

        console.log(error);
     }
        
}