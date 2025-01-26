import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(1);
  const logging = () => {
    console.log("hello");
  };
  useEffect(() => {
    setState(state + 1);
  }, [state]);
  logging();
  return (
    <>
      <h1>Home</h1>
      <h1 className="Hello w-auto"></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
    </>
  );
}

export default App;
