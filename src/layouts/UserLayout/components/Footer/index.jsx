import { useState } from "react";

import * as S from "./styles";

function Footer(props) {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <h2>Footer</h2>
        <p>{count}</p>
        <button onClick={() => handleMinus()}>-</button>
        <button onClick={() => handlePlus()}>+</button>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
}

export default Footer;
