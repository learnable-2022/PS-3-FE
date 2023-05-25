import { Route, Routes } from "react-router-dom";
import MainContentContainer from './components/MainContentContainer'
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
// import './App.css'

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<MainContentContainer />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App
