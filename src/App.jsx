import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import { ProductsProvider } from "./context/ProductsContext";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <Router>
      <ProductsProvider>
      <div className="Zencontainer">
        <Routes>
          {/* Landing page without Navbar */}
          <Route path="/" element={<LandingPage />} />

          {/* Pages with Navbar */}
          <Route
            path="/shop"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/products/:id"
            element={
              <Layout>
                <ProductDetails />
              </Layout>
            }
          />
      </Routes>
      </div>
      </ProductsProvider>
    </Router>
  );
};

export default App;
