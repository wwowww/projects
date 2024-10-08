import { useReducer, useState } from "react";
import Student from "./Student";

// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

export const ACTION_TYPE = {
  add: 'add',
  delete: 'delete',
  mark: 'mark'
}

const reducer = (state: any, action: any) => {
  switch(action.type) {
    case ACTION_TYPE.add:
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false
      }
      return {
        count: state.count + 1,
        students: [...state.students, newStudent]
      }
    case ACTION_TYPE.delete: 
      return {
        count: state.count - 1,
        students: state.students.filter((student: any) => student.id !== action.payload.id) 
      }
    case ACTION_TYPE.mark: 
      return {
        count: state.count,
        students: state.students.map((student: any) => {
          if(student.id === action.payload.id) {
            return {...student, isHere: !student.isHere}
          }
          return student;
        })
      }
    default: state;
  }
}

const initialState = {
  count: 0,
  students: []
}

const UseReducerComponent = () => {
  const [name, setName] = useState<string>("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>출석부</h1>
      <p>총 학생 수: {studentsInfo && studentsInfo.count}</p>
      <input 
        type="text"
        placeholder="이름을 입력해주세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => {
        dispatch({type: ACTION_TYPE.add, payload: {name}})
      }}>추가</button>
      {studentsInfo && studentsInfo.students.map((students: any) => {
        return (
          <Student 
            name={students.name} 
            key={students.id}
            dispatch={dispatch}
            id={students.id}
            isHere={students.isHere}
          />
        )
      })}
    </>
  )
}

export default UseReducerComponent;