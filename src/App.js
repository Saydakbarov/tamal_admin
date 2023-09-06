import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CategoryPage from "./Pages/CategoryPage";
import SubCategory1 from "./Pages/SubCategory1";
import SubCategory2 from "./Pages/SubCategory2";
import SubCategory3 from "./Pages/SubCategory3";
import Brand from "./Pages/Brand";
import NewsPage from "./Pages/NewsPage";
import ProductPage from "./Pages/ProductPage";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <BrowserRouter>
        {!token ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="/" element={<CategoryPage />} />
              <Route path="/subcategory1" element={<SubCategory1 />} />
              <Route path="/subcategory2" element={<SubCategory2 />} />
              <Route path="/subcategory3" element={<SubCategory3 />} />
              <Route path="/brand" element={<Brand />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/product" element={<ProductPage />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
