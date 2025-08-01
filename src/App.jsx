import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import Movies from "./pages/Movies"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
