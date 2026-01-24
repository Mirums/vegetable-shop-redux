import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";
import { CountOfQuantity } from '../Components/Buttons/CountOfQuantity/CountOfQuantity.tsx'
import userEvent from "@testing-library/user-event";
import { MantineProvider } from "@mantine/core";
import App from "../App";
import { UseCartStore } from "../Components/Store/cartStore";

Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
    }),
});

const mockVegetables = [
    {
        id: 1,
        name: "Broccoli-1kg",
        price: 120,
        image: "test.jpg",
        category: "vegetables",
    },
];

vi.mock("ky", () => ({
    default: {
        get: () => ({
            json: async () => mockVegetables,
        }),
    },
}));

describe("CountOfQuantity", () => {
    it("increments and decrements quantity on button clicks", () => {
        let quantity = 0;
        const onIncrease = () => { quantity += 1; };
        const onDecrease = () => { quantity -= 1; };

        render(
            <MantineProvider theme={{ colorScheme: 'light' }}>
                <CountOfQuantity quantity={quantity} onIncrease={onIncrease} onDecrease={onDecrease} />
            </MantineProvider>
        );

        const minusBtn = screen.getByRole('button', { name: /decrease/i });
        const plusBtn = screen.getByRole('button', { name: /increase/i });
        const qtyText = screen.getByText("0");

        fireEvent.click(plusBtn);
        expect(quantity).toBe(1);

        fireEvent.click(minusBtn);
        expect(quantity).toBe(0);
    });
});

describe("Add to cart flow", () => {
    beforeEach(() => {
        UseCartStore.setState({ cart: [] });
    });

    it("adds vegetable to cart when clicking Add to cart", async () => {
        const user = userEvent.setup();

        render(
            <MantineProvider>
                <App />
            </MantineProvider>
        );

        const addButton = await screen.findByText(/add to cart/i);
        await user.click(addButton);

        const cartButton = screen.getByTestId("cart-button");
        await user.click(cartButton);

        const cartItem = await screen.findByTestId("cart-item");
        expect(within(cartItem).getByText(/broccoli/i)).toBeInTheDocument();
    });
});
