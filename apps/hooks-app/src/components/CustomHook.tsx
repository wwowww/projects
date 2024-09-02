import { useFetch } from "../hooks/useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";

const CustomHook = () => {
  const { data: userData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");

  return (
    <div>
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