import { Routes, Route } from "react-router-dom"
import ScrollToTop from "./hooks/ScrollToTop"
import Layout from "./Layout"
import Home from "./pages/Home"
import CategoryPage from "./pages/CategoryPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import CheckoutPage from "./pages/CheckoutPage"

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />

          <Route path="category">
            <Route
              path=":categoryName"
              element={<CategoryPage />}
            />
          </Route>

          <Route path="product">
            <Route
              path=":productSlug"
              element={<ProductDetailPage />}
            />
          </Route>

          <Route path="checkout" element={<CheckoutPage />} />

        </Route>

      </Routes>
    </>
  )
}