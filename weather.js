function getweather(){
let cityname1 = document.querySelector("#temp1").value;
axios.get(`http://api.weatherapi.com/v1/current.json?key=a57b91abf95d45bcbfd105908240809&q=${cityname1}&aqi=yes`)
  .then(function (response) {  

 let tempC=response.data.current.temp_c
 let tempF=response.data .current. temp_f
let result= response.data .location.name;


document.getElementById("result").innerHTML (`The Temperature in ${city} is ${tempC}°C `)
document.getElementById("result").innerHTML (`The Temperature in ${city} is ${tempF}°F `)
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}