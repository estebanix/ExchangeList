import { createContext, useState, useEffect } from "react";

export interface ContextType {
  fetchData: any[];
  setFetchData: (data: any) => void;
  date: string
  setDate: (data: any) => void;
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: any) => {
  const [fetchData, setFetchData] = useState([]);
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
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
