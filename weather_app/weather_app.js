function getWeather() {
  const weatherData = [
    {
      location: {
        name: "Kolkata",
        lat: 22.57,
        lon: 88.37,
      },
      current: {
        tempC: 32.0,
        tempF: 89.6,
        isDay: 1,
        condition: {
          text: "Mist",
        },
        humidity: 38,
        feelsLikeC: 29.8,
        feelsLikef: 85.6,
      },
    },
    {
      location: {
        name: "London",
        lat: 51.52,
        lon: -0.11,
      },
      current: {
        tempC: 4.0,
        tempF: 39.2,
        condition: {
          text: "Overcast",
        },
        humidity: 75,
        feelsLikeC: 1.2,
        feelsLikef: 34.2,
      },
    },
    {
      location: {
        name: "Dubai",
        lat: 25.25,
        lon: 55.28,
      },
      current: {
        tempC: 23.0,
        tempF: 73.4,
        condition: {
          text: "Mist",
        },
        humidity: 78,
        feelsLikeC: 25.0,
        feelsLikef: 76.9,
      },
    },
    {
      location: {
        name: "Delhi",
        lat: 42.85,
        lon: -80.5,
      },
      current: {
        tempC: -1.9,
        tempF: 28.6,
        condition: {
          text: "Clear",
        },
        humidity: 84,
        feelsLikeC: -5.3,
        feelsLikef: 22.5,
      },
    },
    {
      location: {
        name: "Solon",
        lat: 30.92,
        lon: 77.12,
      },
      current: {
        tempC: 26.0,
        tempF: 78.8,
        condition: {
          text: "Sunny",
        },
        humidity: 21,
        feelsLikeC: 24.6,
        feelsLikef: 76.3,
      },
    },
    {
      location: {
        name: "Kathmandu",
        lat: 27.72,
        lon: 85.32,
      },
      current: {
        tempC: 19.0,
        tempF: 66.2,
        condition: {
          text: "Mist",
        },
        humidity: 64,
        feelsLikeC: 19.0,
        feelsLikef: 66.2,
      },
    },
    {
      location: {
        name: "Amazonia",
        lat: 19.29,
        lon: -90.73,
      },
      current: {
        tempC: 27.7,
        tempF: 81.9,
        condition: {
          text: "Clear",
        },
        humidity: 67,
        feelsLikeC: 30.1,
        feelsLikef: 86.2,
      },
    },
    {
      location: {
        name: "Africa",
        lat: 20.14,
        lon: -97.77,
      },
      current: {
        tempC: 21.8,
        tempF: 71.2,
        condition: {
          text: "Fog",
        },
        humidity: 98,
        feelsLikeC: 21.8,
        feelsLikef: 71.2,
      },
    }
  ];
  let result= weatherData.find((data) => data.location.name === 'Africa');
  console.log(result.current.tempF);
//   return result;
}
getWeather();
// console.log(getWeather("Dubai"));

