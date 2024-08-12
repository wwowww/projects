import { ReactNode } from "react";
import style from "./TodoListLayout.module.scss";

type TodoListLayoutProps = {
  padding?: string;
  gap?: string;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  maxHeight?: number | string;
  height?: string;
  children: ReactNode;
}

const TodoListLayout = ({padding, gap, flexDirection="column", maxHeight, height, children}: TodoListLayoutProps) => {
  return (
    <ul 
      className={style.wrap}
      style={{
        padding: padding,
        display: "flex",
        gap: gap,
        flexDirection: flexDirection,
        maxHeight: maxHeight,
        height: height,
      }}
    >
      {children}
    </ul>
  )
}

export default TodoListLayout;