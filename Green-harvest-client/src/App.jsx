
// import Contact from "./Menus/contact/Contact"
// import Footer from "./Components/Footer/Footer"
// import About from "./Menus/About/About"
// import Login from "./Components/Loginpage/Login"
// import Signup from "./Components/Loginpage/Signup"
// import { Routes,Route } from "react-router-dom"
// export default function App() {
//   return (
//     <>
//       <Login/>
    
//     <Routes>
//       <Route path="/login" element={ <Login/> } />
//       <Route path="/signin" element={ <Signup/> } />
//       <Route path="/signin" element={ <Contact/> } />
//       <Route path="/signin" element={<About/> } />
//       <Route path="/signin" element={<About/> } />
//     </Routes>
//     <Footer/>
    
    
//     </>
//   )
// }


import { Routes, Route } from "react-router-dom";
// import Header from "./Components/Header/Header"
import Login from "./Components/Loginpage/Login";
import Signup from "./Components/Loginpage/Signup";
import Contact from "./Menus/contact/Contact";
// import Home from "./Menus/Home/Home"
// import Aboutsec1 from "./Menus/About/Aboutsec1";

export default function App() {
  return (
    <Routes>
      {/* <Header/> */}
   
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/home1" element={ <Home/> }/> */}
      <Route path="/home" element={<Contact />} />
      {/* <Route path="/about" element={<Aboutsec1 />} /> */}
    </Routes>
  );
}