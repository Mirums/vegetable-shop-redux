import {ActionIcon, Text, Group} from "@mantine/core";
import {IconShoppingCart} from "@tabler/icons-react";

type AddToCartProps = {
    price: number;
    onAdd: () => void;
};

export function AddToCart({price, onAdd}: AddToCartProps) {
    return (
        <Group gap={12} justify="space-between">
            <Text c="black" fz={20} fw={600}>
                ${price}
            </Text>

            <ActionIcon
                onClick={onAdd}
                w={204}
                h={44}
                styles={{
                    root: {
                        '--ai-bg': 'var(--mantine-color-brand-5)',
                        color: 'var(--mantine-color-gray-1)',

                        transition: 'background-color 150ms ease, color 150ms ease',

                        '&:hover': {
                            '--ai-bg': 'var(--mantine-color-brand-9)',
                            color: 'var(--mantine-color-brand-1)',
                        },
                    },
                }}
            >
                <Text inherit mr={10} fz={16} fw={600}>
                    Add to cart
                </Text>
                <IconShoppingCart size={18}/>
            </ActionIcon>
        </Group>
    );
}
