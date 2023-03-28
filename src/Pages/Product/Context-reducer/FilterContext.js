import { createContext, useReducer, useContext } from "react";
import { FilterReducer } from "./FilterReducer";


export const initialState = {
    priceRange: 4500,
    category: {
        books: false,
        chess_set: false,
        wearable: false,
    },
    rating: null,
    sortBy: null,
}

/* Initial state for the filter */

const FilterContext = createContext();

const FilterProvider = ({ children }) => {

    const [filterState, filterDispatch] = useReducer(FilterReducer, initialState)

    return <FilterContext.Provider value={{ filterState, filterDispatch }}>
        {children}
    </FilterContext.Provider>
}

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider }