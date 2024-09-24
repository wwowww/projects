import { Routes, Route, useLocation } from 'react-router-dom';
import ContextTodoPage from '../../../pages/ContextTodoPage';
import style from "./Layout.module.scss";
import Header from '../../../components/molecules/Header/Header';

const Layout = () => {
  const location = useLocation();
  const this_pathName = location.pathname;

  return (
    <div className={style.wrap}>
      <div className={style.inner}>
        <Header />
        <Routes>
          <Route path='/' element={<ContextTodoPage />}></Route>
        </Routes>
      </div>
    </div>
    
  )
}

export default Layout;