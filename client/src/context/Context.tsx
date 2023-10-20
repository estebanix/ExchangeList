import { createContext, useState, useEffect, ReactNode } from "react";

type CurrencyData = {
  shortName: string;
  validFrom: string;
  name: string;
  country: string;
  move: number;
  amount: number;
  valBuy: number;
  valSell: number;
  valMid: number;
  currBuy: number;
  currSell: number;
  currMid: number;
  version: number;
  cnbMid: number;
  ecbMid: number;
};

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextType {
  fetchData: CurrencyData[]; 
  setFetchData: (data: CurrencyData[]) => void;
  date: string
  setDate: (data: string) => void;
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider: React.FC <ContextProviderProps> = ({children}) => {
  const [fetchData, setFetchData] = useState<CurrencyData[]>([]);
  const [date, setDate] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        setFetchData(data);
        setDate(data[0].validFrom)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Context.Provider
      value={{
        fetchData,
        setFetchData,
        date,
        setDate
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
