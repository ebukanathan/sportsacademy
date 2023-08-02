
import Footer from "./components/footer/Footer"
import Nav from "./components/Nav/Nav"
import { BrowserRouter } from "react-router-dom"
import Pages from './pages/Pages'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Pages/>
      <Footer/>
     </BrowserRouter>
  )
}

export default App