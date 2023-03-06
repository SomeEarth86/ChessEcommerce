import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

const ProdContext = createContext(null);

const ProductProvider = ({ children }) => {
    const [ProductDetail, setProductDetail] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get("/api/products");
            const data = response.data.products;
            setProductDetail(data);

        })();

    }, []);

    console.log(ProductDetail);

    return (<ProdContext.Provider value={{ ProductDetail }}>
        {children}
    </ProdContext.Provider>)
}

const useProduct = () => useContext(ProdContext);

export { ProductProvider, useProduct };