import axios from "axios";

export const getWishlist = async (authToken) => {
    try {
        const resp = await axios.get('/api/user/wishlist', {
            headers: { authorization: authToken },
        })

        if (resp.status === 200)
            return resp.data;
        else
            throw new Error();

    } catch (e) {
        console.log("Error in Wishlist Service (getWishlist)", e);
    }
}

export const addToWishlist = async (authToken, product) => {
    try {
        const resp = await axios.post('/api/user/wishlist',
            { product },
            {
                headers: { authorization: authToken },
            }
        )

        if (resp.status === 201)
            return resp.data;
        else
            throw new Error();
    } catch (e) {
        console.log("Error in addToWishlist", e);
    }
}

export const removeFromWishlist = async (id, authToken) => {
    try {
        let resp = await axios.delete(`/api/user/wishlist/${id}`, {
            headers: { authorization: authToken },
        })

        if (resp.status === 200)
            return resp.data;
        else
            throw new Error();
    } catch (e) {
        console.log("Error in removeFromWish", e);
    }
}