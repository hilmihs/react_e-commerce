import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from './itemAPI'
import {
    READ_ITEM,
    CREATE_ITEM,
    UPDATE_ITEM,
    REMOVE_ITEM,
    RESEND_ITEM
} from '../../utils/constants'

const initialState = {
    items: [],
    status: 'idle'
}

export const readItem = createAsyncThunk(
    READ_ITEM,
    async (params) => {
        try {
            const { data } = await API.readItem(params);
            if (data.success) {
                return data.data.map(item => {
                    item.sent = true
                    return item
                })
            } else {
                return []
            }
        } catch (error) {
            console.log(error)
        }
    }
);

export const createItemAsync = createAsyncThunk(
    CREATE_ITEM,
    async ({ id, title, rate, description, price, brand, detail_product }) => {
        try {
            const { data } = await API.createItemAsync(title, rate, description, price, brand, detail_product);
            if (data.success) {
                return { id, item: data.data }
            }
        } catch (error) {
            return { id, item: false }
        }
    }
)

export const resendItem = createAsyncThunk(
    RESEND_ITEM,
    async ({ id, title, rate, description, price, brand, detail_product }) => {
        try {
            const { data } = await API.createItemAsync(title, rate, description, price, brand, detail_product);
            if (data.success) {
                return { id, item: data.data }
            }
        } catch (error) {
            return { id, item: false }
        }
    }
)

export const updateItem = createAsyncThunk(
    UPDATE_ITEM,
    async ({ id, title, rate, description, price, brand, detail_product, like }) => {
        try {
            const { data } = await API.updateItem(id, title, rate, description, price, brand, detail_product, like);
            if (data.success) {
                return data.data
            }
        } catch (error) {
            console.log(error, 'gagal')
        }
    }
)

export const removeItem = createAsyncThunk(
    REMOVE_ITEM,
    async (id) => {
        try {
            const { data } = await API.removeItem(id);
            if (data.success) {
                return { id, item: data.data }
            }
        } catch (error) {
            console.log(error, 'gagal')
        }
    }
)

// export const searchItem = createAsyncThunk(
//     SEARCH_ITEM,
//     async (params) => {
//         try {
//             const { data } = await API.search(params);
//             if (data.success) {
//                 return data.data.map(item => {
//                     item.sent = true
//                     return item
//                 })
//             } else {
//                 return []
//             }
//         } catch (error) {
//             return []
//         }
//     }
// )

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        create: (state, action) => {
            state.items = [
                ...state.items,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    rate: action.payload.rate,
                    description: action.payload.description,
                    price: action.payload.price,
                    brand: action.payload.brand,
                    detail_product: action.payload.detail_product,
                    like: action.payload.like,
                    image: action.payload.image,
                    sent: true
                }
            ]
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(readItem.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(readItem.fulfilled, (state, action) => {
                state.status = 'idle';
                state.items = action.payload
               
            })
            .addCase(createItemAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.item) {
                    state.items = state.items.map(item => {
                        if (item.id === action.payload.id) {
                            return { ...action.payload.item, sent: true }
                        }
                        return item
                    })
                } else {
                    state.items = state.items.map(item => {
                        if (item.id === action.payload.id) {
                            item.sent = false
                        }
                        return item
                    })
                }
            })
            .addCase(resendItem.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.item) {
                    state.items = state.items.map(item => {
                        if (item.id === action.payload.id) {
                            return { ...action.payload.item, sent: true }
                        }
                        return item
                    })
                }
            })
            .addCase(updateItem.fulfilled, (state, action) => {
                state.status = 'idle';
                state.items = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...action.payload, sent: true }
                    }
                    return item
                })
            })
            .addCase(removeItem.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.item) {
                    state.items = state.items.filter(item => item.id !== action.payload.id)
                }
            })
    }
})

const { create } = itemSlice.actions;

export const selectItems = (state) => state.item.items;

export const createItem = ( title, rate, description, price, brand, detail_product) => (dispatch, getState) => {
    const id = Date.now()
    dispatch(create({ id, title, rate, description, price, brand, detail_product }))
    dispatch(createItemAsync({ id, title, rate, description, price, brand, detail_product }))
}

export default itemSlice.reducer