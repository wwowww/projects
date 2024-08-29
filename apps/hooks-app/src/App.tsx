import { useState } from "react";
import Page from "./components/contextExample/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";



function App() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <div>
      {/* <UseStateComponent /> */}
      {/* <UseEffectComponent /> */}
      {/* <UseRefComponent /> */}
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <UserContext.Provider value={"사용자"}>
          <Page />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
// function useState(): [any, any] {
//   throw new Error("Function not implemented.");
// }

