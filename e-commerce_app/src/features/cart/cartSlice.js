import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from './cartAPI'
import {
    READ_CART,
    CREATE_CART,
    UPDATE_CART,
    REMOVE_CART,
    RESEND_CART
} from '../../utils/constants'

const initialState = {
    carts: [],
    status: 'idle'
}

export const readCart = createAsyncThunk(
    READ_CART,
    async () => {
        try {
            const { data } = await API.readCart();
            if (data.success) {
                return data.data.map(cart => {
                    cart.sent = true
                    return cart
                })
            } else {
                return []
            }
        } catch (error) {
            console.log(error)
        }
    }
);

export const createCartAsync = createAsyncThunk(
    CREATE_CART,
    async ({ id, ItemId, qty }) => {
        try {
            const { data } = await API.createCart(ItemId, qty);
            if (data.success) {
                return { id, cart: data.data }
            }
        } catch (error) {
            return { id, cart: false }
        }
    }
)

export const resendCart = createAsyncThunk(
    RESEND_CART,
    async ({ id, qty }) => {
        try {
            const { data } = await API.createCart(qty);
            if (data.success) {
                return { id, cart: data.data }
            }
        } catch (error) {
            return { id, cart: false }
        }
    }
)

export const updateCart = createAsyncThunk(
    UPDATE_CART,
    async ({ id, qty }) => {
        try {
            const { data } = await API.updateCart(id, qty);
            if (data.success) {
                return data.data
            }
        } catch (error) {
            console.log(error, 'gagal')
        }
    }
)

export const removeCart = createAsyncThunk(
    REMOVE_CART,
    async (id) => {
        try {
            const { data } = await API.removeCart(id);
            if (data.success) {
                return { id, cart: data.data }
            }
        } catch (error) {
            console.log(error, 'gagal')
        }
    }
)

// export const searchCart = createAsyncThunk(
//     SEARCH_CART,
//     async () => {
//         try {
//             const { data } = await API.search();
//             if (data.success) {
//                 return data.data.map(cart => {
//                     cart.sent = true
//                     return cart
//                 })
//             } else {
//                 return []
//             }
//         } catch (error) {
//             return []
//         }
//     }
// )

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        create: (state, action) => {
            state.carts = [
                ...state.carts,
                {
                    id: action.payload.id,
                    ItemId: action.payload.ItemId,
                    qty: action.payload.qty,
                    sent: true
                }
            ]
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(readCart.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(readCart.fulfilled, (state, action) => {
                state.status = 'idle';
                state.carts = action.payload
               
            })
            .addCase(createCartAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.cart) {
                    state.carts = state.carts.map(cart => {
                        if (cart.id === action.payload.id) {
                            return { ...action.payload.cart, sent: true }
                        }
                        return cart
                    })
                } else {
                    state.carts = state.carts.map(cart => {
                        if (cart.id === action.payload.id) {
                            cart.sent = false
                        }
                        return cart
                    })
                }
            })
            .addCase(resendCart.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.cart) {
                    state.carts = state.carts.map(cart => {
                        if (cart.id === action.payload.id) {
                            return { ...action.payload.cart, sent: true }
                        }
                        return cart
                    })
                }
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.status = 'idle';
                state.carts = state.carts.map(cart => {
                    if (cart.id === action.payload.id) {
                        return { ...action.payload, sent: true }
                    }
                    return cart
                })
            })
            .addCase(removeCart.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.cart) {
                    state.carts = state.carts.filter(cart => cart.id !== action.payload.id)
                }
            })
    }
})

const { create } = cartSlice.actions;

export const selectCarts = (state) => state.cart.carts;

export const createCart = ( ItemId, qty ) => (dispatch, getState) => {
    const id = Date.now()
    dispatch(create({ id, ItemId, qty }))
    dispatch(createCartAsync({ id, ItemId, qty }))
}

export default cartSlice.reducer