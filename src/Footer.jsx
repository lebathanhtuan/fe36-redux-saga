import { useState } from "react";

function Footer() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Footer</h2>
      <p>{count}</p>
      <button onClick={() => handleMinus()}>-</button>
      <button onClick={() => handlePlus()}>+</button>
    </div>
  );
}

export default Footer;
