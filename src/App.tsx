import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import AnimeItem from "./Pages/AnimeItem"
import Gallery from "./Pages/Gallery"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime/:id" element={<AnimeItem />} />
      <Route path="/character/:id" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
