function getWeather(){
    const weatherData = [{
        location: "kolkata",
        lat: "22",
        log: "12",
        humidity: "29"
    },{
        temp_f: "84.2"
    }]
    const result = weatherData.find((o)=>
        o.location === 'kolkata'
        
    );
    console.log(result);

}

getWeather();