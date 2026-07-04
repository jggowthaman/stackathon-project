// import react from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from './Home/Home'
import Contact from './contact/Contact'
import About from './About/About'
// import Gallery from '../Gallery/Gallery'
// import Typography from '../Elements/Typograpy'
export default function Mainpages() {
  return (
    <>
    <Header />
        <Home/>
        <About/>
        {/* <Gallery/>
        <Typography/> */}
        <Contact/>
    <Footer/>    
    </>
  )
}
