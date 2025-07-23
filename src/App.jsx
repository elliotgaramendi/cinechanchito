import { Route, Routes } from "react-router"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/movies" element={<h1>Movies</h1>} />
      </Routes>
    </>
  )
}

export default App
