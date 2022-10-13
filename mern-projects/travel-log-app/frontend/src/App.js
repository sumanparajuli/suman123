import Navbar from "./components/Navbar";
import Home from './components/Home'
import Discuss from './components/Discuss'
import About from './components/About'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PostState from "./context/PostState";
function App() {

  


  return (
    <PostState>

    <BrowserRouter>
      <Navbar />
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </PostState>
  );
}

export default App;
