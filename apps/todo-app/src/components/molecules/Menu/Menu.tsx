import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH_INFO } from "@/mocks/pathInfo";
import style from "./Menu.module.scss";

const Menu = () => {
  const [menu, isMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  
  return (
    <aside className={style.aside}>
      <button onClick={() => isMenu(!menu)} className={style.button}></button>
      <nav>
        <ul className={`${menu ? style.showMenu : style.hideMenu}`}>
          {PATH_INFO.map((info, index) => (
            <li key={index+"key"}
              className={`${style.list} ${pathname === info.path ? style.active : ""}`} 
              onClick={() => {
              navigate(info.path);
              isMenu(false);
            }}
            >
              {info.name}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Menu;