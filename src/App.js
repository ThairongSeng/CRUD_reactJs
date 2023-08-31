
import "./App.css"
import Home from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Create from "./components/Create"
import Update from "./components/Update"
import Read from "./components/Read"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/create" element={<Create />} />
          <Route  path="/update/:id" element={<Update />} />
          <Route  path="/read/:id" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
