
export const FilterReducer = (state, action) => {
    switch (action.type) {

        case "FILTER_PRICE_RANGE":
            return { ...state, priceRange: Number(action.payload) };

        case "SORT_BY":
            return { ...state, sortBy: action.payload }

        case "SORT_RATING":
            return { ...state, rating: action.payload }

        case "Wearables":
            return {
                ...state,
                category: {
                    ...state.category, wearable: !state.category.wearable
                }
            }

        case "Book":
            return {
                ...state,
                category: {
                    ...state.category, books: !state.category.books
                }
            }

        case "Chess_Set":
            return {
                ...state,
                category: {
                    ...state.category, chess_set: !state.category.chess_set
                }
            }


        case "CLEAR_ALL":
            return {
                priceRange: 4500,
                category: {
                    books: false,
                    chess_set: false,
                    wearable: false,
                },
                rating: null,
                sortBy: null,
            }

        default: return state;
    }
}
