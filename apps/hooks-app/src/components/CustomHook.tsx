import { useInput } from "../hooks/useInput";
import { useFetch } from "../hooks/useFetch";

const displayMessage = (message: string) => {
  alert(message)
}

const baseUrl = "https://jsonplaceholder.typicode.com";

const CustomHook = () => {
  const [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);
  const { data: userData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");

  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue || ''} onChange={handleChange} />
      <button onClick={inputValue && handleSubmit}>확인</button>
      <hr />
      <h1>useFetch</h1>
      {/* <button onClick={() => fetchUrl("users")}>Users</button> */}
      {/* <button onClick={() => fetchUrl("posts")}>Posts</button> */}
      {/* <button onClick={() => fetchUrl("todos")}>Todos</button> */}
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
      
    </div>
  )
}

export default CustomHook;