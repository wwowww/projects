
import ContextTodoInput from "../prototypes/Context/ContextTodoInput";
import ContextTodoList from "../prototypes/Context/ContextTodoList";
import ContextTodoProvider from "../prototypes/Context/ContextTodoProvider";

const ContextTodoPage = () => {
  return (
    <ContextTodoProvider>
      <div>
        <ContextTodoInput />
        <ContextTodoList />
      </div>
    </ContextTodoProvider>
    
  )
}

export default ContextTodoPage;