import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";

import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ProductDetailPage from "../pages/ProductDetail";
import NotFoundPage from "../pages/NotFound";

import { ROUTES } from "../constants/routes";
import { light, dark } from "../themes";

import * as S from "./styles";

function App() {
  return (
    <ThemeProvider theme={light}>
      <S.AppWrapper>
        <Header />
        <S.MainWrapper>
          <S.MainContainer>
            <Routes>
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route path={ROUTES.ABOUT} element={<AboutPage />} />
              <Route
                path={ROUTES.PRODUCT_DETAIL}
                element={<ProductDetailPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </S.MainContainer>
        </S.MainWrapper>
        <Footer />
      </S.AppWrapper>
    </ThemeProvider>
  );
}

export default App;
