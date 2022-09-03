import { request } from '../../utils/api'

export const readItem = (params) => request.get(`items?${new URLSearchParams(params).toString()}`)

export const createItemAsync = (title, rate, description, price, brand, detail_product, image) => {
    request.post('items', {
        title,
        rate,
        description,
        price,
        brand,
        detail_product,
        image
    })
}

export const updateItem = (id, title, rate, description, price, brand, detail_product, like) => {
    request.put(`items/${id}`, { 
        title, rate, description, price, brand, detail_product, like })
}

export const removeItem = id => request.delete(`items/${id}`)

export const readCart = () => request.get('carts')

export const createCart = (ItemId) => {
    request.post('carts', {
        ItemId
    })
}

export const updateCart = (id, qty) => {
    request.put(`carts/${id}`, { qty })
}

export const removeCart = id => request.delete(`carts/${id}`)