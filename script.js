

async function serviceWeather(city,days) {

    const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
    const API_KEY =  "3385a570adb94ff2a76174611230808";

    const params = new URLSearchParams ({

        key:API_KEY,
        q:city,
        days,
        lang:"uk"

    });

    const res = await fetch(`${BASE_URL}?${params}`);
    
        if(!res.ok) {

            throw new Error("Something went wrong");
        }
        return res.json();
}


serviceWeather("Odesa",3)
.then(data => console.log(data));

