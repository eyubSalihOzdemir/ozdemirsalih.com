import { createContext, useContext, useState } from "react";
import { ReactNode, Dispatch, SetStateAction } from "react";

interface ContextValue {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

const StateContext = createContext<ContextValue>({
  // Auto completion purposes
  isDarkMode: false,
  setIsDarkMode: () => {},
});

interface Props {
  children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <StateContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
