import {InfoAboutVegetable} from "../InfoAboutVegetable/InfoAboutVegetable.tsx";
import {CountOfQuantity} from "../../../Buttons/CountOfQuantity/CountOfQuantity.tsx";
import {AddToCart} from "../AddToCart/AddToCart.tsx";
import {Card, Group, Image} from "@mantine/core";
import {useState} from 'react'
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../store/store.ts";
import {addToCart} from "../../../store/vegetableSlice.ts";

type CardOfVegetableProps = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export function CardOfVegetable(props: CardOfVegetableProps) {
    const { name, price, image, id } = props;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch<AppDispatch>()

    const title = name.split('-')[0];
    const weight = name.split('-')[1];

    const handleAddToCart = () => {
        dispatch(addToCart(
            {id,
            title,
            weight,
            price,
            image,
            quantity,}
        ))
    };

    return (
        <Card bg="white" radius={24} w={302} h={414} shadow="sm">
            <Image src={image} mt={16} />

            <Group gap={45} w={270} mb={16} justify="space-between">
                <InfoAboutVegetable title={title} weight={weight} />

                <CountOfQuantity
                    quantity={quantity}
                    onIncrease={() => setQuantity(q => q+1)}
                    onDecrease={() => setQuantity(q => Math.max(1, q-1))}
                />
            </Group>

            <AddToCart onAdd={handleAddToCart} price={price} />
        </Card>
    );
}
