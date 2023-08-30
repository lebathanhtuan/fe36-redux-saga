import { useState } from "react";

function Footer(props) {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  const bgStyle = {
    backgroundColor: "red",
    borderRadius: count * 5,
    padding: "16px 12px",
  };

  return (
    <div style={bgStyle}>
      <h2>Footer</h2>
      <p>{count}</p>
      <button onClick={() => handleMinus()}>-</button>
      <button onClick={() => handlePlus()}>+</button>
    </div>
  );
}

export default Footer;
