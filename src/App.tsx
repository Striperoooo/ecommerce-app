import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import CategoryPage from "./pages/CategoryPage"

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />

        <Route path="category">
          <Route path=":categoryName" element={<CategoryPage />} />
        </Route>

      </Route>

    </Routes>
  )
}