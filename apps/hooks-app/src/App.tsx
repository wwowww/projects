import { useState } from "react";
import Page from "./components/contextExample/Page";
import { ThemeContext } from "./context/ThemeContext";



function App() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <div>
      {/* <UseStateComponent /> */}
      {/* <UseEffectComponent /> */}
      {/* <UseRefComponent /> */}
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
// function useState(): [any, any] {
//   throw new Error("Function not implemented.");
// }

