// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { createContext, useState, useContext, useEffect } from 'react';

export const ClimateContext = createContext();
export const useClimate = () => useContext(ClimateContext)
export default function ClimateProvider({ children }) {
    const [temperature, setTemperature] = useState(50);
    const [humidity, setHumidity] = useState(40);
    const [desiredTemp, setDesiredTemp] = useState(50);
    const [desiredHumidity, setDesiredHumidity] = useState(40)
useEffect (()=>{
    const tempTimeout = setTimeout(()=>{
        if(desiredTemp>temperature)  return setTemperature(temperature=>++temperature);
        else if (desiredTemp<temperature)  return setTemperature(temperature=>--temperature);
    }, 1000)
    console.log('desiredTemp',desiredTemp)
    console.log('Temperature',temperature)
    return ()=>clearTimeout(tempTimeout)

},[desiredTemp, temperature])
useEffect (()=>{
    const tempTimeout = setTimeout(()=>{
        if(desiredHumidity>humidity)  return setHumidity(humidity=>++humidity);
        else if(desiredHumidity<humidity)  return setHumidity(humidity=>--humidity);
    }, 500)
    console.log('desiredHumidity',desiredHumidity)
    console.log('Humidity',humidity)
    return ()=>clearTimeout(tempTimeout)

},[desiredHumidity, humidity])
return (
    <ClimateContext.Provider value={{desiredHumidity, setDesiredHumidity, temperature, setTemperature, humidity, setHumidity, desiredTemp, setDesiredTemp}}>
    {children}
    </ClimateContext.Provider>
)
}
