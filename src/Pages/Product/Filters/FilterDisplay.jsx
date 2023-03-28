import { useFilter } from '../Context-reducer/FilterContext';
import './filter.css';

const FilterDisplay = () => {

    const { filterState, filterDispatch } = useFilter();

    const { books, chess_set, wearable } = filterState.category;

    return (
        <aside className="sidebar">
            <div className="filter-tab">
                <h4>Filter</h4>

                <h4 onClick={() =>
                    filterDispatch({ type: "CLEAR_ALL" })}>
                    Clear</h4>
            </div>

            <div className="filter-box">
                <h3 className="f-box-heading">Price</h3>
                <div className="price-range">
                    <div>650</div>
                    <div>2500</div>
                    <div>4500</div>
                </div>

                <input type="range" min={650} max={4500} value={filterState.priceRange}
                    onChange={(e) => {
                        filterDispatch({ type: "FILTER_PRICE_RANGE", payload: e.target.value })
                    }} />
            </div>

            <div>
                <h3 className="f-box-heading">Category</h3>
                <div className="checkboxes">
                    <label className="filter-item" htmlFor="book">
                        <input id="book" type="checkbox" checked={books}
                            onChange={() => filterDispatch({ type: "Book" })} />
                        <span>Books</span>
                    </label>
                    <label className="filter-item" htmlFor="chess_set">
                        <input type="checkbox" id="chess_set" checked={chess_set}
                            onChange={() => filterDispatch({ type: "Chess_Set" })} />
                        <span>ChessSets</span>
                    </label>
                    <label className="filter-item" htmlFor="wear" >
                        <input type="checkbox" id="wear" checked={wearable}
                            onChange={() => filterDispatch({ type: "Wearables" })} />
                        <span>Wearables</span>
                    </label>
                </div>
            </div>

            <div>
                <h3 className="f-box-heading">Ratings</h3>
                <div className="checkboxes">
                    <label className="filter-item" htmlFor="four_star" >
                        <input name="rating" type="radio" id="four_star" checked={filterState.rating === "4_STAR_ABOVE"}
                            onChange={() => filterDispatch({ type: "SORT_RATING", payload: "4_STAR_ABOVE" })} />
                        <span>4 stars and above</span>
                    </label>
                    <label className="filter-item" htmlFor="three_star">
                        <input name="rating" type="radio" id="three_star" checked={filterState.rating === "3_STAR_ABOVE"}
                            onChange={() => filterDispatch({ type: "SORT_RATING", payload: "3_STAR_ABOVE" })} />
                        <span>3 stars and above</span>
                    </label>
                    <label className="filter-item" htmlFor="two_star">
                        <input name="rating" type="radio" id="two_star" checked={filterState.rating === "2_STAR_ABOVE"}
                            onChange={() => filterDispatch({ type: "SORT_RATING", payload: "2_STAR_ABOVE" })} />
                        <span>2 stars and above</span>
                    </label>
                </div>
            </div>

            <div>
                <h3 className="f-box-heading">Price</h3>
                <div className="checkboxes">
                    <label className="filter-item" htmlFor="high_low">
                        <input type="radio" id="high_low" name="price_filter"
                            checked={filterState.sortBy === 'HIGH_TO_LOW'}
                            onChange={() => filterDispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })} />
                        <span>Price-High to Low</span>
                    </label>
                    <label className="filter-item" htmlFor="low_high">
                        <input type="radio" id="low_high" name="price_filter"
                            checked={filterState.sortBy === 'LOW_TO_HIGH'}
                            onChange={() => filterDispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })} />
                        <span>Price- Low to High</span>
                    </label>
                </div>
            </div>
        </aside>
    )
}

export { FilterDisplay }