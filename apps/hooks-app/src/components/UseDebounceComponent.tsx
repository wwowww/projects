// 이벤트가 연속적으로 발생할 때, 
// 제일 마지막 이벤트가 발생한 후 일정 시간이 지난 후에 함수를 호출함.

import { useEffect, useState } from "react";
import "./UseDebounceComponent.scss";

const users = [
  { name: "김철수", age: "16" },
  { name: "이영희", age: "26" },
  { name: "김민수", age: "15" },
  { name: "홍길동", age: "20" },
  { name: "홍민영", age: "45" },
  { name: "김민영", age: "32" },
  { name: "권은지", age: "30" },
  { name: "권은수", age: "10" },
  { name: "권지은", age: "31" },
  { name: "이민지", age: "21" },

];

const fetchDataFromServer = (value: any) => {
  if(!value) return [];

  console.log("서버로 부터 데이터 가져오는 중...");

  return users.filter(user => user.name.startsWith(value));
}

const UseDebounceComponent = () => {
  const [input, setInput] = useState<string>();
  const [debouncedInput, setDebouncedInput] = useState(input);
  const [result, setResult] = useState<any>([]);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedInput(input);
    }, 1000)

    return () => {
      clearTimeout(timerID);
    }
  }, [input])

  useEffect(() => {
    const users = fetchDataFromServer(debouncedInput);
    setResult(users);
  }, [debouncedInput])

  return (
    <div className="container">
      <div className="search-container">
        <input type="text" placeholder="여기에 검색하세요." value={input} onChange={(e) => setInput(e.target.value)} />
        <ul>
          {result.map((user: any, index: number) => (
            <li key={`${user}-${index}`}>
              <span>{user.name}</span>
              <span>{user.age}세</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UseDebounceComponent;