import { ReactNode } from "react";
import style from "./TodoListLayout.module.scss";

type TodoListLayoutProps = {
  padding: string;
  gap?: string;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  children: ReactNode;
}

const TodoListLayout = ({padding, gap, flexDirection="column", children}: TodoListLayoutProps) => {
  return (
    <div 
      style={{
        padding: padding,
        display: "flex",
        gap: gap,
        flexDirection: flexDirection
      }}
    >
      {children}
    </div>
  )
}

export default TodoListLayout;