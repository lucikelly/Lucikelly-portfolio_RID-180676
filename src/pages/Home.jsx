import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import LisTec from "../components/LisTec/LisTec"
import ListProjects from "../components/ListProjects/ListProjects"
import Sobre from "../components/Sobre/Sobre"

function Home () {
  return(
    <>
       <Header/>
       <Hero/>
       <ListProjects/>
       <LisTec/>
       <Sobre/>
       <Footer/>

    </>
   
  )
}

export default Home