// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { createContext, useState, useContext, useEffect } from 'react';

export const ClimateContext = createContext();
export const useClimate = () => useContext(ClimateContext)
export default function ClimateProvider({ children }) {
    const [temperature, setTemperature] = useState(50);
    const [humidity, setHumidity] = useState(40);
    const [desiredTemp, setDesiredTemp] = useState(50);
useEffect (()=>{
    const tempTimeout = setTimeout(()=>{
        if(desiredTemp>temperature)  return setTemperature(temperature=>++temperature);
        else if (desiredTemp<temperature)  return setTemperature(temperature=>--temperature);
    }, 1000)
    console.log('desiredTemp',desiredTemp)
    console.log('Temperature',temperature)
    //return ()=>clearTimeout(tempTimeout)

},[desiredTemp, temperature])
return (
    <ClimateContext.Provider value={{temperature, setTemperature, humidity, setHumidity, desiredTemp, setDesiredTemp}}>
    {children}
    </ClimateContext.Provider>
)
}
