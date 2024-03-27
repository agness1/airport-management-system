import { createContext, useState, useEffect, FC, useContext  } from "react";
import axios from 'axios';

interface FlightOperationData {
    Type: string,
    Airline: string,
    Gate: string,
    Airport: string,
    Aircraft: string
}

interface FlightOperaionContextType {
    data: FlightOperationData[];
}

const FlightOperaionContext = createContext( {})

export const FlightOperarionProvider:FC = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('adresTwojegoBackendu');
          setData(response.data);
        } catch (error) {
          console.error('Błąd pobierania danych:', error);
        }
      };

      fetchData();

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // useEffect zostanie wykonany tylko raz po zamontowaniu komponentu

    return (
      <FlightOperaionContext.Provider value={{ data }}>
        {children}
      </FlightOperaionContext.Provider>
    );
  };

  export const useFlightOperaionContext = () => useContext(FlightOperaionContext)
