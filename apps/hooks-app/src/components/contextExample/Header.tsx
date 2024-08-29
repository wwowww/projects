import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black"
      }}
    >
      <h1>Hi👋 Eunjee</h1>    
    </header>
  )
}

export default Header;