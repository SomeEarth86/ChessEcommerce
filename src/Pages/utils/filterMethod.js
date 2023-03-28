const priceRangeFilter = (itemList, priceRange) => {
    return itemList.filter((item) => item.price <= priceRange);
}

const sortData = (itemList, sortByOption) => {

    if (sortByOption === 'HIGH_TO_LOW')
        return [...itemList].sort((a, b) => b.price - a.price)
    else if (sortByOption === 'LOW_TO_HIGH')
        return [...itemList].sort((a, b) => a.price - b.price)

    return itemList;
}

const sortStarRating = (itemList, ratingOption) => {
    if (ratingOption === '4_STAR_ABOVE')
        return itemList.filter(item => item.starRating >= 4)
    if (ratingOption === '3_STAR_ABOVE')
        return itemList.filter(item => item.starRating >= 3)
    if (ratingOption === '2_STAR_ABOVE')
        return itemList.filter(item => item.starRating >= 2)

    return itemList;
}

const sortByCategory = (itemList, books, chess_set, wearable) => {
    let newArray = [];



    if (books === false && chess_set === false && wearable === false)
        return itemList;

    if (books === true) {
        let tempArr = itemList.filter((item) => item.categoryName === "Book");
        newArray.push(...tempArr);
    }

    if (chess_set === true) {
        let tempArr = itemList.filter((item) => item.categoryName === "Chess_Set");
        newArray.push(...tempArr);
    }

    if (wearable === true) {
        let tempArr = itemList.filter((item) => item.categoryName === "Wearables");
        newArray.push(...tempArr);
    }

    return newArray;
}

export { priceRangeFilter, sortData, sortStarRating, sortByCategory };