import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import CategoryPage from "./pages/CategoryPage"
import ScrollToTop from "./hooks/ScrollToTop"

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />

          <Route path="category">
            <Route path=":categoryName" element={<CategoryPage />} />
          </Route>

        </Route>

      </Routes>
    </>
  )
}