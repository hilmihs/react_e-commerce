import { request } from '../../utils/api'

export const readCart = () => request.get('carts')

export const createCart = (ItemId, qty) => {
    request.post('carts', {
        ItemId, qty
    })
}

export const updateCart = (id, qty) => {
    request.put(`carts/${id}`, { qty })
}

export const removeCart = id => request.delete(`carts/${id}`)