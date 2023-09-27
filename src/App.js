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
import Order from "./Pages/Order";
import { useState } from "react";

function App() {
  const token = localStorage.getItem("token");

  const [lang, setLang] = useState(
    JSON.parse(window.localStorage.getItem("lang")) || "ru"
  );

  return (
    <div className="App">
      <BrowserRouter>
        {!token ? (
          <Login />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Dashboard lang={lang} setLang={setLang} />}
            >
              <Route
                path="/"
                element={<CategoryPage lang={lang} setLang={setLang} />}
              />
              <Route
                path="/subcategory1"
                element={<SubCategory1 lang={lang} setLang={setLang} />}
              />
              <Route
                path="/subcategory2"
                element={<SubCategory2 lang={lang} setLang={setLang} />}
              />
              <Route
                path="/subcategory3"
                element={<SubCategory3 lang={lang} setLang={setLang} />}
              />
              <Route
                path="/brand"
                element={<Brand lang={lang} setLang={setLang} />}
              />
              <Route
                path="/news"
                element={<NewsPage lang={lang} setLang={setLang} />}
              />
              <Route
                path="/product"
                element={<ProductPage lang={lang} setLang={setLang} />}
              />
              <Route
                path="/order"
                element={<Order lang={lang} setLang={setLang} />}
              />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
