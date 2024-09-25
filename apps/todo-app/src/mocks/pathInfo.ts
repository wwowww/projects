import ContextTodoPage from '@/pages/ContextTodoPage';
import ReduxTodoPage from '@/pages/ReduxTodoPage';

export const PATH_INFO = [
  {
    name: "context",
    path: "/",
    element: ContextTodoPage,
  },
  {
    name: "redux",
    path: "/redux",
    element: ReduxTodoPage,
  },
];