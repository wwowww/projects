
import ContextTodoInput from "@/prototypes/Context/ContextTodoInput";
import ContextTodoList from "@/prototypes/Context/ContextTodoList";
import ContextTodoProvider from "@/prototypes/Context/ContextTodoProvider";

const ContextTodoPage = () => {
  return (
    <ContextTodoProvider>
      <ContextTodoInput />
      <ContextTodoList />
    </ContextTodoProvider>
    
  )
}

export default ContextTodoPage;