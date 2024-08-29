import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black"
      }}
    >
      <h1>Eunjee님, <br/>좋은 하루 되세요🙋‍♀️</h1>    
    </div>
  )
}

export default Content;