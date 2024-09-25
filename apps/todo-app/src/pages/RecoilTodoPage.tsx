import { RecoilRoot } from 'recoil';
import RecoilTodoInput from "@/prototypes/Recoil/RecoilTodoInput";
import RecoilTodoList from '@/prototypes/Recoil/RecoilTodoList';

const RecoilTodoPage = () => {
  return (
    <RecoilRoot>
      <RecoilTodoInput />
      <RecoilTodoList />
    </RecoilRoot>
  )
}

export default RecoilTodoPage;