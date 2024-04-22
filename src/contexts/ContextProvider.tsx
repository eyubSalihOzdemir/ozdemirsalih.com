import { createContext, useContext, useState } from "react";
import { ReactNode, Dispatch, SetStateAction } from "react";

interface ContextValue {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  isSideBar: boolean;
  setIsSideBar: Dispatch<SetStateAction<boolean>>;
  activeNavbarButton: string;
  setActiveNavbarButton: Dispatch<SetStateAction<string>>;
}

const StateContext = createContext<ContextValue>({
  // Auto completion purposes
  isDarkMode: false,
  setIsDarkMode: () => {},
  isSideBar: false,
  setIsSideBar: () => {},
  activeNavbarButton: "home",
  setActiveNavbarButton: () => {},
});

interface Props {
  children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);
  const [activeSidebarButton, setActiveSidebarButton] = useState("home");

  return (
    <StateContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        isSideBar,
        setIsSideBar,
        activeNavbarButton: activeSidebarButton,
        setActiveNavbarButton: setActiveSidebarButton,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
