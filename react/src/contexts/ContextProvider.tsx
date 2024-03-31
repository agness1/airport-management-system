import { createContext, useState, useEffect, FC, useContext  } from "react";
import axios from 'axios';


const FlightOperaionContext = createContext( {})

export const FlightOperarionProvider:FC = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/flightData')
        .then(response => {
        setData(response.data)
        })
        .catch(error => {
          console.error('Wystąpił błąd podczas pobierania danych:', error);
        });

    }, [])
    return (
      <FlightOperaionContext.Provider value={data}>
        {children}
      </FlightOperaionContext.Provider>
    );
  };

  export const useFlightOperaionContext = () => useContext(FlightOperaionContext)
