import { createContext, useContext, useState } from "react";
import { ReactNode, Dispatch, SetStateAction } from "react";

interface ContextValue {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  isSideBar: boolean;
  setIsSideBar: Dispatch<SetStateAction<boolean>>;
}

const StateContext = createContext<ContextValue>({
  // Auto completion purposes
  isDarkMode: false,
  setIsDarkMode: () => {},
  isSideBar: false,
  setIsSideBar: () => {},
});

interface Props {
  children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);

  return (
    <StateContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        isSideBar,
        setIsSideBar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
