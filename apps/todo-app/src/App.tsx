import { BrowserRouter } from 'react-router-dom'
import Layout from "./components/templates/Layout/Layout";
import "./assets/styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Layout /> 
    </BrowserRouter>
  )
}

export default App
