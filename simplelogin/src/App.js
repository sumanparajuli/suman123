// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Home from './components/myapp/Home'
// import Navbar from './components/myapp/Navbar'
// import About from './components/myapp/About'
// import Features from './components/myapp/Features'
import GithubUsers from "./components/GithubUsers"
// import UseEffect from "./components/UseEffect"
const App = () => {

  return (
    <div>
      {/* <Router>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/about/:id' element={<About/>} />
            <Route exact path='/features' element={<Features/>} />
        </Routes>
      </Router> */}
      {/* <UseEffect/> */}
      <GithubUsers/>
    </div>
  )
}

export default App