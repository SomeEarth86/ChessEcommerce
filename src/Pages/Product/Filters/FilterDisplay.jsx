import './filter.css';

const FilterDisplay = () => {
    return (
        <aside className="sidebar">
            <div className="filter-tab">
                <h4>Filter</h4>

                <a href="#">Clear</a>
            </div>

            <div className="filter-box">
                <h3 className="f-box-heading">Price</h3>
                <div className="price-range">
                    <div>500</div>
                    <div>2500</div>
                    <div>4500</div>
                </div>
                <input type="range" />
            </div>

            <div>
                <h3 className="f-box-heading">Category</h3>
                <div className="checkboxes">
                    <label className="filter-item" htmlFor="book">
                        <input id="book" type="checkbox" />
                        <span>Books</span>
                    </label>
                    <label className="filter-item" htmlFor="chess_set">
                        <input type="checkbox" id="chess_set" />
                        <span>ChessSets</span>
                    </label>
                    <label className="filter-item" htmlFor="wear" >
                        <input type="checkbox" id="wear" />
                        <span>Wearables</span>
                    </label>
                </div>
            </div>

            <div>
                <h3 className="f-box-heading">Ratings</h3>
                <div className="checkboxes">
                    <label className="filter-item" htmlFor="four_star" >
                        <input name="rating" type="radio" id="four_star" />
                        <span>4 stars and above</span>
                    </label>
                    <label className="filter-item" htmlFor="three_star">
                        <input name="rating" type="radio" id="three_star" />
                        <span>3 stars and above</span>
                    </label>
                    <label className="filter-item" htmlFor="two_star">
                        <input name="rating" type="radio" id="two_star" />
                        <span>2 stars and above</span>
                    </label>
                </div>
            </div>

            <div>
                <h3 className="f-box-heading">Price</h3>
                <div className="checkboxes">
                    <label className="filter-item" htmlFor="high_low">
                        <input type="radio" id="high_low" name="price_filter" />
                        <span>Price-High to Low</span>
                    </label>
                    <label className="filter-item" htmlFor="low_high">
                        <input type="radio" id="low_high" name="price_filter" />
                        <span>Price- Low to High</span>
                    </label>
                </div>
            </div>
        </aside>
    )
}

export { FilterDisplay }