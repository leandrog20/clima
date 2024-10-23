import Header from "./components/header";
import './App.css'
import Form from "./components/form";
import { useEffect, useState} from "react";
import api from "./services/api";
import ClimateInfo from "./components/info/climateInfo";


 function App() {

  const [input, setInput] = useState('')
  const [weather, setWeather] = useState({})
  const [name, setName] = useState()
  const [humidy, setHumidy] = useState('0')
  const [temp, setTemp] = useState('0')
  const [tempMin, setTempMin] = useState('0')
  const [tempMax, setTempMax] = useState('0')
  const [description, setDescription] = useState()
  const [icon, setIcon] = useState('04d')
  const [wind, setWind] = useState('0')
  
   const HandleChange = (event) => setInput(event.target.value)
  

useEffect(() => {
  api(input).then(data => {
    setWeather(data['data'])
  })
})


 function Search(event) {
  event.preventDefault()
console.log(weather)
  if(input)
  
  setName(weather.city.name) // name
  setHumidy(weather.list[0].main.humidity) // humidade em %
  setTemp(Math.round(weather.list[0].main.temp)) // temperatura
  setTempMax(Math.round(weather.list[0].main.temp_max)) // temperatura maxima
  setTempMin(weather.list[0].main.temp_min) // temperatura minima
  setDescription(weather.list[0].weather[0].description)
  setIcon(weather.list[0].weather[0].icon)
  setWind(weather.list[0].wind.speed)
}


  return (
    <div>
      <Header/>
      <Form 
      input={input}
      handleChange={HandleChange}
      search={Search}/>
       <ClimateInfo
        name={name}
        humidy={humidy}
        temp={temp}
        tempMax={tempMax}
        tempMin={tempMin}
        description={description}
        icon={icon}
        wind={wind}
      /> 

      
    </div>
  );
}

export default App
