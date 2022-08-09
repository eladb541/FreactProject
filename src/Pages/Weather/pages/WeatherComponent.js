import React from "react";
import humidity from "../../../../../self_project/src/Pages/Weather/weathericons/humidity.png";
import pressure from "../../../../../self_project/src/Pages/Weather/weathericons/cloudy-night.png"
import wind from "../../../../../self_project/src/Pages/Weather/weathericons/wind.png"
import sunrise from "../../../../../self_project/src/Pages/Weather/weathericons/sunrise.png"
import sunset from "../weathericons/sunset.jpg";
import "../../Weather/style/WeatherComponent.css"



   
    


export const WeatherInfoIcons = {
    sunset: {sunset} ,
    sunrise: {sunrise},
    humidity: {humidity} ,
    wind: {wind} ,
    pressure: {pressure},
};







const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        < div className="InfoContainer"  >
            < img className="InfoIcon"  src={WeatherInfoIcons[name][name]} alt="alt" height="36" width="36"/>
            <span className="InfoLabel" >
                {value}
                <span className="InfoLabelIn">{name}</span>
            </span>
        </div>
    );
};
const WeatherComponent = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
            < div className="WeatherContainer" >
                <span className="Condition"  >
                    <span className="IN">{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                </span>
               
            </div>
            <span className="Location">{`${weather?.name}, ${weather?.sys?.country}`}</span>

            <span className="WeatherInfoLabel" >Weather Info</span>
            <div className="WeatherInfoContainer" >
                <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
            </div>
        </>
    );
};

export default WeatherComponent;