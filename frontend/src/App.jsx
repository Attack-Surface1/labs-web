import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import "./App.css"
import Navbar from "./components/Navbar"
import LabOne from "./pages/LabOne"
import LabTwo from "./pages/LabTwo"
import UpdateProfile from "./pages/UpdateProfile"


function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab-one/:id" element={<LabOne />} />
        <Route path="/update-profile" element={<UpdateProfile/>} />
      </Routes>
    </div>
  )
}

export default App
