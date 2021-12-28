import React, {useState} from 'react'
import './App.css'

function App() {

  const apiKey =''
  const [weatherData, setWeatherData]= useState([{}])
  const [city, setCity]= useState("") 

  const getWeather =(event) => { 
    if(event.key =="Enter") {
      fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},fr&units=metric&lang=fr&appid=${apiKey}&lang={fr}`)
      .then(response =>response.json())
      .then(
        data=>{
          setWeatherData(data)
        
          setCity("")
        
      
        }
      )
    }
  }
  return (
    <div className='container'>
      <input 
      className='input' 
      placeholder="Entrer le nom d'une ville"
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
      />
      {typeof weatherData.main === 'undefined'? (
      <div>
        <p>Bienvenu sur votre site  méteo</p>
      </div>
    ): (
      <div className='weather-card'>
        <p className='city'>Ville : {weatherData.name}</p>
        <p className='temp'>Température : {Math.round(weatherData.main.temp)} degrés</p>
        <p className='des'>Description : {weatherData.weather[0].description}</p>
      </div> 
    )}

      {weatherData.cod==="404"?(
        <p>ville non trouvée, merci de saisir une autre ville</p>
      ):
      (
        <></>
      )}

    </div>
  );
};

export default App;
