import "@/app/global.scss";
import Layout from "@/components/atoms/Layout/Layout";
import TodoList from "@/components/molecules/TodoList/TodoList";
import InsertModal from "@/components/organisms/Insertmodal/InsertModal";
import Header from "@/components/molecules/Header/Header";
import TodoListLayout from "@/components/atoms/TodoListLayout/TodoListLayout";
import useTodoStore from "@/hooks/todoStore";
import Empty from "@/components/atoms/Empty/Empty";
import useModal from "@/hooks/useModal";
import Button from "@/components/atoms/Button/Button";

const Home = () => {
  const {todos, toggleTodo, removeTodo } = useTodoStore();
  const { show, openModal, toggleModal } = useModal();

  return (
    <Layout padding="16px 22px" borderRadius="15px">
      <Header />
      {(todos.length === 0 && !show) && (
        <Empty height="calc(100% - 160px)"content="새로운 노트를 만들어보세요!">
          <Button onClick={openModal} className="scale">새 노트 만들기</Button>
        </Empty>
      )}
      {todos.length !== 0 && !show && (
        <>
          <TodoListLayout gap="10px" height="100%" maxHeight="278px">
            <TodoList 
              todos={todos}
              onCheckToggle={toggleTodo}
              removeOnClick={removeTodo}
              // updateOnClick={toggleModal}
            />
          </TodoListLayout>
          {/* <Button onClick={openModal}>새 노트</Button> */}
        </>
      )}
      {show && <InsertModal />}
      {/* <Cat /> */}
    </Layout>
  )
}

export default Home;