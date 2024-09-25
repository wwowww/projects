import { Routes, Route } from 'react-router-dom';
import Header from '@/components/molecules/Header/Header';
import { PATH_INFO } from "@/mocks/pathInfo";
import style from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={style.wrap}>
      <div className={style.inner}>
        <Header />
        <Routes>
          {PATH_INFO.map((info, index) => (
            <Route path={info.path} element={<info.element />} key={index+"key"} />
          ))}
        </Routes>
      </div>
    </div>
  )
}

export default Layout;