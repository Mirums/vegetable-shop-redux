import { create } from 'zustand';

export type CartItem = {
    id: number;
    title: string;
    weight: string;
    price: number;
    image: string;
    quantity: number;
};

type CartStore = {
    cart: CartItem[];

    addToCart: (item: CartItem) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
};
export const UseCartStore = create<CartStore>((set) => ({
    cart: [],

    addToCart: (item) =>
        set((state) => {
            const existing = state.cart.find(i => i.id === item.id);

            if (existing) {
                return {
                    cart: state.cart.map(i =>
                        i.id === item.id
                            ? { ...i, quantity: i.quantity + item.quantity }
                            : i
                    ),
                };
            }

            return {
                cart: [...state.cart, item],
            };
        }),


    increaseQuantity: (id) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
        })),

    decreaseQuantity: (id) =>
        set((state) => ({
            cart: state.cart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0),
        })),
}));
