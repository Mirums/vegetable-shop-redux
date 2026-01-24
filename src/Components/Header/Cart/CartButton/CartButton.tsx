import {ActionIcon, Center, Paper, Popover, Text} from "@mantine/core";
import {IconShoppingCart} from "@tabler/icons-react";
import {useState} from "react";
import {UseCartStore} from "../../../Store/cartStore.ts";
import {Cart} from "../Cart.tsx";


export function CartButton() {
    const [openCart, setOpenCart] = useState(false);
    const cart = UseCartStore(state => state.cart)

    function openOrCloseCart() {
        if (openCart) {
            setOpenCart(false)
        } else {
            setOpenCart(true)
        }
    }

    console.log(openCart)
    return <>
        <Popover
            withinPortal={false}
            opened={openCart}
            onChange={setOpenCart}
            position={'bottom-end'}
            offset={20}>
            <div></div>
            <Popover.Target>
                <ActionIcon onClick={openOrCloseCart} w={144} h={44} radius={8} bg={'brand.7'} mr={20} mt={7} data-testid="cart-button">
                    <Paper w={20} h={20} bg={'gray.0'} radius={'50%'} mr={10}>
                        <Center w={'100%'} h={'100%'}>
                            <Text c={'black'}>{cart.length}</Text>
                        </Center>
                    </Paper>
                    <Text mr={10} fz={16} fw={600}>Cart</Text>
                    <IconShoppingCart></IconShoppingCart>
                </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown>
                <Cart/>
            </Popover.Dropdown>
        </Popover>
    </>
}