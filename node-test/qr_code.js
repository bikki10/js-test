// 1. Generate QR code for the url on the terminal using package qrcode

// var QRCode = require('qrcode')

// QRCode.toDataURL('I am a pony!', function (err, url) {
//   console.log(url)
// })

// const QRCode = require('qrcode')

// QRCode.toString('Bikki is a damn good developer!',{type:'terminal'}, function (err, url) {
//   console.log(url)
// })

// 2. Weather

// const axios = require("axios");

// const fetchWeatherData = async() =>{
//     try{
//         const response = await axios(
//             "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
//         );
//         console.log({response});
//         // console.log({response});
        

//         //Extract the relevant weather data from the response

//         const{latitude,longitude,...rest}=response.data;
//         return{rest};
//     } catch (error){
//         throw new Error("Failed to fetch weather data.");
//     }
// };

// async function getWeather(){
//     const data = await fetchWeatherData();
//     console.log(data);
// }

// 3. Write a node.js application to convert the currency from one currency to another using package: current-converter-lt

// const CC = require('currency-converter-lt')

// let currencyConverter = new CC({from:"NRP", to:"JPY", amount:15000, isDecimalComma:true});

// currencyConverter.convert().then((response) => {
//     console.log(response); //or do something else
// })

// currencyConverter.convert(15000).then((response) => {
//     console.log(response) //or do something else
// })

// currencyConverter.rates().then((response) => {
//     console.log(response) //or do something else
// })