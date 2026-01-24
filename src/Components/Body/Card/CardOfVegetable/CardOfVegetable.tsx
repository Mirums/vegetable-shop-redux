import {InfoAboutVegetable} from "../InfoAboutVegetable/InfoAboutVegetable.tsx";
import {CountOfQuantity} from "../../../Buttons/CountOfQuantity/CountOfQuantity.tsx";
import {AddToCart} from "../AddToCart/AddToCart.tsx";
import {Card, Group, Image} from "@mantine/core";
import {UseCartStore} from '../../../Store/cartStore.ts'
import {useState} from 'react'

type CardOfVegetableProps = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export function CardOfVegetable(props: CardOfVegetableProps) {
    const { name, price, image, id } = props;
    const [quantity, setQuantity] = useState(1);

    const addToCart = UseCartStore(state => state.addToCart);

    const title = name.split('-')[0];
    const weight = name.split('-')[1];

    const handleAddToCart = () => {
        addToCart({
            id,
            title,
            weight,
            price,
            image,
            quantity,
        });
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
