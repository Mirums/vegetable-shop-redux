import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import ky from "ky";

type Vegetable = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}
type CartItem = {
    id: number;
    title: string;
    weight: string;
    price: number;
    image: string;
    quantity: number;
}
type VegetableState = {
    vegetables: Vegetable[]
    loading: boolean
    cart: CartItem[];
}

const initialVegetables: VegetableState = {
    vegetables: [],
    loading: false,
    cart: []
}
//Получение данных от АПИшки
export const fetchVegetables = createAsyncThunk(
    'vegetables/fetchVegetable',
    async () => {
        const data = await ky
            .get('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
            .json() as Vegetable[];
        return data
    }
)

//Основная логика
export const vegetableSlice = createSlice({
    name: 'vegetables',
    initialState: initialVegetables,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const item = action.payload

            const existing = state.cart.find((cartItem) => cartItem.id === item.id)

            if (existing) {
                existing.quantity += 1
            } else {
                state.cart.push({
                    ...item,
                    quantity: 1
                })
            }
        },
        increaseQuantity(state, action: PayloadAction<number>) {
            const id = action.payload
            state.cart = state.cart.map((item) =>
                item.id === id
                    ? {...item, quantity: item.quantity + 1}
                    : item
            )
        },
        decreaseQuantity(state, action: PayloadAction<number>) {
            const id = action.payload
            state.cart = state.cart.map((item) =>
                item.id === id
                    ? {...item, quantity: Math.max(0, item.quantity - 1)}
                    : item
            )
                .filter((item) => item.quantity > 0)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVegetables.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchVegetables.fulfilled, (state, action) => {
                state.loading = false
                state.vegetables = action.payload
            })
            .addCase(fetchVegetables.rejected, (state) => {
                state.loading = false
            })
    }
})
export const { addToCart, increaseQuantity, decreaseQuantity } = vegetableSlice.actions