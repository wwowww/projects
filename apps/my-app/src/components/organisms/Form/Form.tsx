import { useState } from "react";
import useTodoStore from "@/hooks/todoStore";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import style from "./Form.module.scss";
import Typography from "@/components/atoms/Typography/Typography";

type FormProps = {
  errorMessage?: string;
  closeModal: any;
};

const Form = ({ errorMessage, closeModal }: FormProps) => {
  const [text, setText] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const { todos, addTodo } = useTodoStore();

  const onChange = (e: any) => {
    e.target.value !== "" && setShowErrorMessage(false);
    setText(e.target.value);
  }

  // const onChangeSelectedTodo = (todo: any) => {
  //   setSelectedTodo(todo);
  // }

  const onDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  }

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (text.length !== 0) {
      addTodo(text, description);
      closeModal();
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }
  }

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <Input 
        type="text"
        value={text}
        onChange={onChange}
        placeholder="제목을 입력해주세요."
      />
      <textarea
        value={description}
        onChange={onDescriptionChange}
        placeholder="할 일에 대한 설명을 작성해주세요."
      />
      <Typography className="label-12-100-600" color="#FF5834">
        {showErrorMessage ? errorMessage : ""}
      </Typography>
      <Button type="submit" onClick={() => setShowErrorMessage(true)}>
        <Typography className="body-16-150-400" color="#fff">추가하기</Typography>
      </Button>
    </form>

  )
}

export default Form;