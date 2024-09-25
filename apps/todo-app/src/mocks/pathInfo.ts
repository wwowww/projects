import ContextTodoPage from '@/pages/ContextTodoPage';
import ReduxTodoPage from '@/pages/ReduxTodoPage';
import JotaiTodoPage from '@/pages/JotaiTodoPage';
import RecoilTodoPage from '@/pages/RecoilTodoPage';

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
  {
    name: "jotai",
    path: "/jotai",
    element: JotaiTodoPage,
  },
  {
    name: "recoil",
    path: "/recoil",
    element: RecoilTodoPage,
  },
];