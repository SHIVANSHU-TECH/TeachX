import { Routes ,Route } from "react-router-dom";
import Home from "./pages/Home";
 import Ad from "./pages/ad";
 import Teach from './pages/teach';
 import Signup from "./pages/signup";
 import Login from "./pages/login";
import AboutUs from "./pages/about";
function App() {
  return (

      <div className="app">
      <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/Ad" element={<Ad/>} />
      <Route path="/Teach" element={<Teach/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Login" element={<Login/>} /> 
      <Route path="/About" element={<AboutUs/>} /> 
      </Routes>
      </div>
  
  )
}

export default App;
