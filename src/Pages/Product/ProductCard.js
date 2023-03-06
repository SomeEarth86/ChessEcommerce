import './product.css'
import '../index.css'
import { useProduct } from './Context-reducer/ProductContext'
// import { products } from "../../backend/db/products"


export const ProductCard = () => {
    const { ProductDetail:  products } = useProduct();
    console.log(products);

    return (<>
        {products.map((product) => {
            return <div className="ecom-card badge">
                <div className="image-box">
                    <img src={product.ImageSource} alt="prod-img" className="ecom-img" />
                    <i class="fas fa-heart icon"></i>
                </div>

                <div className="card-detail">
                    <div className="title-rating">
                        <div className="heading">{product.title}
                        </div>

                        <small className="star">
                            <p>{product.starRating}</p>
                            <i class="fas fa-star"></i>
                        </small>
                    </div>

                    <small>{product.categoryName}</small>

                    <div className="price">{product.price}</div>

                    <button className="btn login">Add To Cart</button>

                </div>

            </div>
        })
        }
    </>)
}
