import Typography from "@/components/atoms/Typography/Typography";
import style from "./TodoList.module.scss";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";

type ListProps = {
  todos: {
    id: number;
    text: string;
    description: string;
    checked: boolean;
  }[];
  onCheckToggle?: any;
  removeOnClick?: any;
  updateOnClick?: any;
  // updateVaule?: any; 
}

const TodoList = ({todos, onCheckToggle, removeOnClick}: ListProps) => {
  return (
   todos?.map((todo, index) => (
      <li key={todo.id+'-'+index} className={style.list}>
        <Input type="checkbox" value={todo.text} onChange={() => onCheckToggle(todo.id)} />
        <label htmlFor={`${todo.id}`} className={style.label}>
          <Typography Tag="h2" className="title-22-140-600">{todo.text}</Typography>
          <Typography Tag="p" className="body-12-150-400">{todo.id}</Typography>
        </label>
        <Button onClick={() => removeOnClick(todo.id)}>삭제</Button>
      </li>
  )))
}

export default TodoList;