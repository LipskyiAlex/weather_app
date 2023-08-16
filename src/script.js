import { serviceWeather } from "./weather_api";

const form = document.querySelector(".js-search-form");
const cardsList = document.querySelector(".js-list");

form.addEventListener("submit", handleClick);

function handleClick(e) {

    e.preventDefault();
     cardsList.textContent="";
          const {
        elements: {city,days} 
     } = e.currentTarget;


    serviceWeather(city.value,days.value)
    .then(data => renderMarkup(data.forecast.forecastday));
    
}

function renderMarkup(obj) {

   let markup  = obj.reduce((html, element) =>  {

        return html+`<li>
        <h2>${element.date}</h2>
        <img src="${element.day.condition.icon}" alt="">
        <h3>Средняя темапература за день</h3>
        <p>${element.day.avgtemp_c}</p>
      </li>`

   },'')
         
   cardsList.insertAdjacentHTML('afterbegin',markup);

}







