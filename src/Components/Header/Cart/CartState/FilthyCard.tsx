import {Group, Image, Text, Stack, Box, Divider} from "@mantine/core";
import {CountOfQuantity} from "../../../Buttons/CountOfQuantity/CountOfQuantity.tsx";
import {useDispatch} from "react-redux";
import type { AppDispatch } from "../../../store/store";
import {decreaseQuantity, increaseQuantity} from "../../../store/vegetableSlice.ts";


type Props = {
    id: number;
    title: string;
    weight: string;
    price: number;
    image: string;
    quantity: number;
    withDivider?: boolean;
}

export function FilthyCard({title, weight, price, image, quantity, withDivider, id}: Props) {
    const dispatch = useDispatch<AppDispatch>();
    const totalPriceOfVegetable = price * quantity;
    return <>
        <Group w={396} h={80}>
            <Image w={64} h={64} src={image}/>
            <Group justify={'space-between'} w={'75%' }>
                <Stack gap={0}>
                    <Group gap={11}>
                        <Text fz={18} fw={600} data-testid="cart-item">{title}</Text>
                        <Text tt={'lowercase'} fz={14} c={'gray.5'} fw={600}>{weight}</Text>
                    </Group>
                    <Text fz={20} fw={600}>$ {totalPriceOfVegetable}</Text>
                </Stack>
                <Box mt={32}>
                    <CountOfQuantity
                        quantity={quantity}
                        onIncrease={() => dispatch(increaseQuantity(id))}
                        onDecrease={() => dispatch(decreaseQuantity(id))}/>
                </Box>
                {withDivider && <Divider w={'100%'}/>}
            </Group>
        </Group>

    </>
}