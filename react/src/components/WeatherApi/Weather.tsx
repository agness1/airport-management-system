import UseFetchApi from "../../hooks/API/useFetchApi";
import {FC} from "react";

const Weather:FC = () => {

const dataApi = UseFetchApi('http://api.weatherapi.com/v1/current.json?key=e12f671139b24a48b3e181939241704&q=LA&aqi=no')

const showWeatherData = () => {
if (dataApi.data !== null) {
return (
    <div className="h-full flex flex-col items-center justify-around p-2">
        <h3 className="text-white text-2xl">{dataApi.data.location.name}</h3>
        <p className="text-white text-xl">{dataApi.data.current.condition.text}</p>
        <img className="w-1/4" src={dataApi.data.current.condition.icon}></img>
     <div className="flex gap-2 text-white text-lg"> <p>Temperature:</p>{dataApi.data.current.temp_c} C</div>
     <div className="flex gap-2 text-white text-lg">
        <p>Wind</p>
         <p>{dataApi.data.current.wind_kph} kph</p>
         <p>{dataApi.data.current.wind_dir}</p>
     </div>
     <div className="flex gap-2 text-white text-lg">
        <p>Pressure:</p>
         <p>{dataApi.data.current.pressure_mb} mb</p>
     </div>

    </div>
)
}
}

return (
    <div className='h-1/2 bg-blue m-2 rounded-2xl shadow-blue shadow-2xl'>
{showWeatherData()}
    </div>
)
}

export default Weather;
