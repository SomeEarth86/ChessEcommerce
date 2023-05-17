import axios from "axios";

export const getCartItem = async (authToken) => {
    try {

        const resp = await axios.get('/api/user/cart', {
            headers: {
                authorization: authToken,
            }
        })

        if (resp.status === 200)
            return resp.data;
        else
            throw new Error();

    } catch (e) {
        console.log("Error in Services.js -> GetcartItem", e);
    }

}

export const addToCart = async (authToken, product) => {
    try {

        const resp = await axios.post('/api/user/cart',
            { product: product },
            {
                headers: { authorization: authToken },
            })

        if (resp.status === 201)
            return resp.data;
        else
            throw new Error();

    } catch (e) {
        console.log("Error in AddtoCart - Service.js", e);
    }

}

export const changeQtyCart = async (id, authToken, type) => {

    try {
        const resp = await axios.post(`/api/user/cart/${id}`,
            {
                action: {
                    type: type
                }
            },
            {
                headers: { authorization: authToken },
            })

        if (resp.status === 200)
            return resp.data;
        else
            throw new Error();

    } catch (e) {
        console.log("Error in changeQtyCart -> Service.js", e);
    }

}

export const deleteCart = async (id, authToken) => {

    try {
        const resp = await axios.delete(`/api/user/cart/${id}`, {
            headers: { authorization: authToken },
        })

        if (resp.status === 200)
            return resp.data;
        else
            throw new Error();

    } catch (e) {
        console.log("Error in deleteCart -> Service.js", e);
    }

}