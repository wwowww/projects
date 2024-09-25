import { Provider } from "react-redux";
import store from "../store";
import ReduxTodoInput from "@/prototypes/Redux/ReduxTodoInput";
import ReduxTodoList from "@/prototypes/Redux/ReduxTodoList";


const ReduxTodoPage = () => {
  return (
    <Provider store={store}>
      <ReduxTodoInput />
      <ReduxTodoList />
    </Provider>
  )
}

export default ReduxTodoPage;