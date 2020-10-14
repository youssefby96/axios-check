const express=require("express");
const axios=require("axios");
const app=express();


//by zip code
const api1='http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=41f2f02dbd79a928e37e9cdcc438eb36'
//by id
const api2='http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=41f2f02dbd79a928e37e9cdcc438eb36'
//by city name
const api3 = 'http://api.openweathermap.org/data/2.5/weather?q=Tunisia&appid=41f2f02dbd79a928e37e9cdcc438eb36'


// GET by zip code
app.get('/Montain view',(req,res)=>{
    axios.get(api1)
    .then(response=>res.send(response.data))
    .catch(err=>console.log(err))
})

// GET by id
app.get('/Cairns',(req,res)=>{
    axios.get(api2)
    .then(response=>res.send(response.data))
    .catch(err=>console.log(err))
})

// GET by city name
app.get('/Tunisia',(req,res)=>{
    axios.get(api3)
    .then(response=>res.send(response.data))
    .catch(err=>console.log(err))
})

app.listen(4000, (error) => {
    if (error) console.log('Server is not running')
    else console.log('Server is running on port 4000')
});