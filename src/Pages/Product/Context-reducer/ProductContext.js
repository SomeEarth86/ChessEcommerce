import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

const ProdContext = createContext(null);

const ProductProvider = ({ children }) => {
    const [ProductDetail, setProductDetail] = useState([]);

    try {
        useEffect(() => {
            (async () => {
                const response = await axios.get("/api/products");
                if (response.status === 200) {
                    const data = response.data.products;
                    setProductDetail(data);
                }
            })();
        }, []);
    } catch (err) {
        console.log("Error in Product Fetching: ProductContext")
    }

    return (<ProdContext.Provider value={{ ProductDetail }}>
        {children}
    </ProdContext.Provider>)
}

const useProduct = () => useContext(ProdContext);

export { ProductProvider, useProduct };