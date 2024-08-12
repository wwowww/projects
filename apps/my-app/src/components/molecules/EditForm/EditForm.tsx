import { useState, useRef, useEffect, useCallback, ChangeEvent } from "react";
import useTodoStore from "@/hooks/todoStore";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Typography from "@/components/atoms/Typography/Typography";

export type TodoEditFromProps = {
  todo: Todo;
  updateTodo: (todo: Todo) => void;
}

type FormProps = {
  errorMessage?: string;
  closeModal: any;
};

const EditForm = ( props: (FormProps & TodoEditFromProps)): JSX.Element => {
  // const [text, setText] = useState<string>("");
  // const [description, setDescription] = useState<string>("");
  // const [selectedTodo, setSelectedTodo] = useState(null);
  // const [showErrorMessage, setShowErrorMessage] = useState(false);

  // const { todos, addTodo } = useTodoStore();

  // const onChange = (e: any) => {
  //   e.target.value !== "" && setShowErrorMessage(false);
  //   setText(e.target.value);
  // }

  // const onChangeSelectedTodo = (todo: any) => {
  //   setSelectedTodo(todo);
  // }

  // const onDescriptionChange = (e: any) => {
  //   setDescription(e.target.value);
  // }

  // const onSubmit = (e: any) => {
  //   e.preventDefault();

  //   if (text.length !== 0) {
  //     addTodo(text, description);
  //     closeModal();
  //     setShowErrorMessage(false);
  //   } else {
  //     setShowErrorMessage(true);
  //   }
  // }

  const { todo, updateTodo, closeModal, errorMessage } = props;
  const [text, setText] = useState<string>(todo.text);
  const [description, setDescription] = useState<string>(todo.description);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  
  // const errorMessage = "제목을 입력해주세요. 필수 값입니다.";

  const handleTextChange = useCallback((e: ChangeEvent<HTMLInputElement>) => { // TODO: Title로 변경
    return setText(e.target.value)
  }, []);

  const handleDescriptionChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => { // TODO: Title로 변경
    return setDescription(e.target.value)
  }, []);

  const handleDone = useCallback(() => {
    return updateTodo({ ...todo, text: text, description: description });
  }, [updateTodo, text, description]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);  
  

  return (
    <form onSubmit={handleDone}>
      <Input 
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="제목을 입력해주세요."
      />
      <textarea
        value={description}
        onChange={handleDescriptionChange}
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

export default EditForm;