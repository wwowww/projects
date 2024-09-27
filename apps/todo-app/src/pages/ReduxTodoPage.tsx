import { Provider } from "react-redux";
import ReduxTodoInput from "@/prototypes/Redux/ReduxTodoInput";
import ReduxTodoList from "@/prototypes/Redux/ReduxTodoList";
import { persistor, store } from '@/store/reduce';
import { PersistGate } from 'redux-persist/integration/react';

const ReduxTodoPage = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <ReduxTodoInput />
      <ReduxTodoList />
      </PersistGate>
    </Provider>
  )
}

export default ReduxTodoPage;