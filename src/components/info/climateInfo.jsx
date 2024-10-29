import './style.css'
import { RiCelsiusLine } from "react-icons/ri";
import {FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";

const ClimateInfo = (props) => {

  
    return(
        
        <div className='container'>
            <div className="container-header">
                <div className="
                description">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                </div>
                <img src={`https://openweathermap.org/img/wn/${props.icon}.png`} alt="temperature icon" />
            </div>
            <div className='info'>
                <h2><CiTempHigh/>{props.temp} <RiCelsiusLine /></h2>
                <div className='details'>
                    <p>Detalhes</p>

                    <p><WiHumidity/> 
                    Humidade: {props.humidy}%</p>
                    <p><FaWind/> Vento: {props.wind}m/s</p>
                    <p><FaTemperatureArrowUp/> Temp Max: {props.temMax}</p>
                    <p><FaTemperatureArrowDown/> Temp Min: {props.temp}</p>
                </div>
            </div>
        </div>
    );
}

export default ClimateInfo;