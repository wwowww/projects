type ListProps = {
  todos?: {
    id: number;
    text: string;
    checked: boolean;
  }[];
  onCheckToggle?: any;
}

const TodoList = ({todos, onCheckToggle}: ListProps) => {
  return (
   todos?.map((todo, index) => (
      <div key={todo.id+'-'+index}>
        <input id={todo.text+todo.id} type="checkbox" onClick={() => onCheckToggle(todo.id)} />
        <label htmlFor={todo.text+todo.id}>{todo.text}</label>
      </div>
  )))
}

export default TodoList;