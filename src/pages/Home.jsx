import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import LisTec from "../components/LisTec/LisTec";
import ListProjects from "../components/ListProjects/ListProjects";
import Sobre from "../components/Sobre/Sobre";
import { useState } from "react";
import { darkTheme, lightTheme } from "../theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../GlobalStyled";
import github from "../assets/github.png";
import gitblack from "../assets/gitblack.png";
import linkedin from "../assets/linkedin.png";
import linkedinblanck from "../assets/linkedinblack.png";


function Home() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header
        title="Trocar Tema"
        fun={toggleTheme}
        icon={theme === "dark" ? github : gitblack}
        icon2={theme === "dark" ? linkedin : linkedinblanck}
      />
      <Hero />
      <ListProjects />
      <LisTec />
      <Sobre />
      <Footer 
        icon={theme === "dark" ? github : gitblack}
        icon2={theme === "dark" ? linkedin : linkedinblanck} />
    </ThemeProvider>
  );
}

export default Home;
