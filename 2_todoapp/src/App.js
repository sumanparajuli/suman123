import './App.css';
import Banner from './components/Banner';
import ToDo from './components/ToDo';
import Navbar from './components/Navbar';
import About from './components/About'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />}></Route>
          <Route path="/todolist" element={<ToDo />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>



    </>

  );
}

export default App;
