import { useContext } from "react";
import { Button } from "antd";
import { ThemeContext } from "../../../../App";

import * as S from "./styles";

function Footer(props) {
  const { setTheme } = useContext(ThemeContext);
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <h2>Footer</h2>
        <Button onClick={() => setTheme("dark")}>Dark</Button>
        <Button onClick={() => setTheme("light")}>Light</Button>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
}

export default Footer;
