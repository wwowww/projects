import { ReactNode } from "react";
import style from "./Layout.module.scss";

type LayoutProps = {
  padding: string;
  borderRadius?: string;
  children: ReactNode;
}

const Layout = ({padding, borderRadius, children}: LayoutProps) => {
  return (
    <div className={style.layout}>
      <div className={style.inner} style={{
        padding: padding,
        borderRadius: borderRadius
      }}>
        {children}
      </div>
    </div>
  )
}

export default Layout;