import { createContext, useState } from 'react';

export interface ContextType {
  blogData: any[];
  setBlogData: (data: any) => void;
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: any) => {
  const [blogData, setBlogData] = useState([]);

  return (
    <Context.Provider
      value={{
        blogData,
        setBlogData
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;