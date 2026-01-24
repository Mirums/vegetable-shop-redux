import {Image, Stack, Text} from "@mantine/core";
import emptyCart from '../../../Images/cart_empty.svg'

export function EmptyCard() {
    return <>
        <Stack justify={'center'} align={"center"} w={301} h={227}>
            <Image w={117} h={106} src={emptyCart}></Image>
            <Text fz={16} fw={400} c={'gray.7'}>Your cart is empty!</Text>
        </Stack>
    </>
}