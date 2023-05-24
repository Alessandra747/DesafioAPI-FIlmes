import Main from "./main/index";
import { createGlobalStyle } from "styled-components";
import Carousel from "./carousel/carousel";
import NavBar from "./navBar";
import Header from "./header/header";
import Footer from "./footer/footer";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <NavBar />
      <Carousel />
      <Footer />
    </>
  );
}
