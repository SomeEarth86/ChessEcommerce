import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { FilterDisplay } from "./Filters/FilterDisplay";
import { ProductCard } from "./ProductCard";
import { products } from "../../backend/db/products"

import './product.css'
import '../index.css'

const ProductExplore = () => {
    return (<>

        <Navbar />

        <div className="main-content">
            <FilterDisplay />
            <main className="products">
                <h3 className="marg-lef">Showing All products ({products.length})</h3>

                <div className="card-disp">

                    <ProductCard />

                </div>

            </main>
        </div>

        <Footer />
    </>
    )
}

export { ProductExplore }