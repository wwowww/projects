import { useState } from "react";
import "@/app/global.scss";
import Layout from "@/components/atoms/Layout/Layout";
import TodoList from "@/components/molecules/TodoList/TodoList";
import Modal from "@/components/organisms/Modal/Modal";
import InputBox from "@/components/atoms/Input/Input";
import Header from "@/components/molecules/Header/Header";
import TodoListLayout from "@/components/atoms/TodoListLayout/TodoListLayout";

const Home = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일1",
      checked: false,
    },
    {
      id: 2,
      text: "할일2",
      checked: false,
    },
    {
      id: 3,
      text: "할일3",
      checked: false,
    },
  ])

  const onInsertTodo = (text: string) => {
    if (text === "") {
      return "할 일을 입력해주세요."
    } else {
      const todo = {
        id: todos.length + 1,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo))
    }
  }

  const onCheckToggle = (id: number) => {
    setTodos(todos => todos.map((todo) => (
      todo.id === id 
        ? {...todo, checked: !todo.checked}
        : todo
    )))
  }

  return (
    <Layout padding="16px 22px" borderRadius="15px">
      <Header />
        <TodoListLayout padding="20px 0" gap="10px">
          <TodoList todos={todos} onCheckToggle={onCheckToggle} />
        </TodoListLayout>
      <Modal closeButton={true} modalButton={<div>Button</div>}>
        <InputBox type="text" placeholder="내용을 입력해주세요." onInsertTodo={onInsertTodo} errorMessage="할 일을 입력해주세요." />
      </Modal>
    </Layout>
  )
}

export default Home;