import './product.css'
import '../index.css'
import { useProduct } from './Context-reducer/ProductContext'
import { useFilter } from './Context-reducer/FilterContext';
import {
    priceRangeFilter,
    sortData,
    sortStarRating,
    sortByCategory
} from '../utils/filterMethod';

export const ProductCard = () => {
    const { ProductDetail: products } = useProduct();

    let localProdCopy = products;
    const { filterState } = useFilter();

    const { books, chess_set, wearable } = filterState.category

    const priceRangeProducts = priceRangeFilter(localProdCopy, filterState.priceRange);
    const sortDataProducts = sortData(priceRangeProducts, filterState.sortBy);
    const starRatingProducts = sortStarRating(sortDataProducts, filterState.rating);
    const sortCategoryProd = sortByCategory(starRatingProducts, books, chess_set, wearable);

    return (<>
        {sortCategoryProd.map((product) => {
            return <div className="ecom-card badge">
                <div className="image-box">
                    <img src={product.ImageSource} alt="prod-img" className="ecom-img" />
                    <i className="fas fa-heart icon"></i>
                </div>

                <div className="card-detail">
                    <div className="title-rating">
                        <div className="heading">{product.title}
                        </div>

                    </div>

                    <small>{product.categoryName}</small>

                    <div className="price">₹{product.price}
                        <small className="star">
                            <p>{product.starRating}</p>
                            <i className="fas fa-star"></i>
                        </small>
                    </div>

                    <button className="btn login">Add To Cart</button>

                </div>

            </div>
        })
        }
    </>)
}
