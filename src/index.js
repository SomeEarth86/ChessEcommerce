import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./Pages/Product/Context-reducer/ProductContext";
import { FilterProvider } from "./Pages/Product/Context-reducer/FilterContext";
import { AuthProvider } from "./Pages/Product/Context-reducer/AuthContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider >
          <FilterProvider>
            <App />
          </FilterProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById("root")
);
