import React from "react"
import ReactDom from "react-dom"

class MovieService extends React.Component {
    constructor() {
        super()

    }

    getGenres() {

    }

}

getWeather: function (cityId) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("GET", `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${this.API}`, true);
        request.onload = function () {
            resolve(JSON.parse(this.response))
            // console.log(JSON.parse(this.response))
        };
        request.onerror = function() {
            reject(">> There was an error while loading the API...")
        }
        request.send(null);
        
    })
},