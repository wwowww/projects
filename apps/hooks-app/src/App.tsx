import UseMemoComponent from "./components/UseMemoComponent";
import UseMemoComponent2 from "./components/UseMemoComponent2";

function App() {
  return (
    <div>
      {/* <UseStateComponent /> */}
      {/* <UseEffectComponent /> */}
      {/* <UseRefComponent /> */}
      {/* <UseContextComponent /> */}
      <UseMemoComponent />
      <UseMemoComponent2 />
    </div>
  )
}

export default App;
function useState(): [any, any] {
  throw new Error("Function not implemented.");
}