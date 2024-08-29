import { useState } from "react";
import Page from "../components/contextExample/Page";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const UseContextComponent = () => {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <UserContext.Provider value={"사용자"}>
          <Page />
        </UserContext.Provider>
      </ThemeContext.Provider>
  )
}

export default UseContextComponent;