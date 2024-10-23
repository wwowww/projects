import { ChangeEvent, KeyboardEventHandler, useCallback, useEffect, useState } from 'react';
import { v4 } from "uuid";
import Button from '@/components/atoms/Button/Button';
import Typography from '@/components/atoms/Typography/Typography';
import useSpeechToText from '@/hooks/useSpeechToText';
import style from "./TodoInput.module.scss"

import MicrophoneIcon from "@/assets/images/icon/svg/microphone.svg?react";
import MicrophoneSlashIcon from "@/assets/images/icon/svg/microphone-slash.svg?react";

export type Props = {
  addTodo: (todo: Todo) => void;
  placeholder?: string;
  errorMessage?: string;
  ref?: any;
}

const Input = ({addTodo, placeholder, errorMessage, ref}: Props) => {
  const [input, setInput] = useState<string>('');
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const { transcript, listening, toggleListening, resetTranscript } = useSpeechToText();

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    e && setShowErrorMessage(false);
  }, [transcript]);

  const handleAddTodo = useCallback(() => {
    if (!input) return setShowErrorMessage(true);
    
    addTodo({ id: v4(), title: input, isDone: false });
    setInput('');
    resetTranscript();
    setShowErrorMessage(false);
  },[addTodo, input]);

  useEffect(() => {
    if (transcript) setInput(transcript);

  }, [transcript, listening]);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.keyCode === 229) return;
    if (e.key === 'Enter') handleAddTodo();
  },[handleAddTodo, addTodo, input]);

  return (
    <div className={style.todoInput}>
      <div className={style.wrap}>
        <div className={style.flex}>
          <Button onClick={toggleListening} className={style.buttonIcon}>
            {
            listening
              ? <MicrophoneSlashIcon className={style.microphoneSlash} />
              : <MicrophoneIcon className={style.microphone} />
            }
          </Button>
          <input
            ref={ref}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className={style.input}
            placeholder={placeholder ?? "할 일을 입력해 주세요."}
          />
        </div>
        <Button type="button" onClick={handleAddTodo} className={style.button}>
          추가
        </Button>
      </div>
      {showErrorMessage && (
        <Typography className="label-12-100-600" color="#FF5834">
          {errorMessage ?? "할 일을 입력해주세요."}
        </Typography>
      )}
      {listening && (
        <Typography className="label-12-100-600" Tag="p" color="#7c7c7c">
          당신의 목소리를 듣고 있습니다... 마이크 버튼을 눌러 종료해주세요.
       </Typography>
      )}
    </div>
  )
}

export default Input;