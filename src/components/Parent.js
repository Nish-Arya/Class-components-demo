import { useState, useEffect } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log('I have mounted!');
  }, [])

  return (
    <>
      <h1>Hello from parent!</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Child count={count} message={message} />
    </>
  );
}

export default Parent;