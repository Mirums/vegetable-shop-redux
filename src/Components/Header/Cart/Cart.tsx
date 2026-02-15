import {Divider, Group, Stack, Text} from "@mantine/core";
import {EmptyCard} from "./CartState/EmptyCard.tsx";
import {FilthyCard} from "./CartState/FilthyCard.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";


export function Cart() {
    const cart = useSelector((state: RootState) => state.vegetables.cart)
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return <>
        <Stack
        >{cart.length === 0
            ? <EmptyCard/>
            : cart.map((item, index) => (
                <FilthyCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    weight={item.weight}
                    price={item.price}
                    image={item.image}
                    quantity={item.quantity}
                    withDivider={index !== cart.length - 1}
                />

            ))

        }
            <Divider mt={12} w={"100%"}></Divider>
            <Group justify={'space-between'}>
                <Text fz={16} fw={600}>Total</Text>
                <Text fz={16} fw={600}>$ {totalPrice}</Text>
            </Group>
        </Stack>

    </>
}