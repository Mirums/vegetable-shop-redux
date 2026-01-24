import {ActionIcon, Group, Text} from "@mantine/core";
import {IconMinus, IconPlus} from "@tabler/icons-react";

type Props= {
    quantity: number
    onIncrease: () => void;
    onDecrease: () => void;
}
export function CountOfQuantity({quantity, onIncrease, onDecrease}: Props) {
    return <>
        <Group gap={11}>
            <ActionIcon
                onClick={onDecrease}
                size={30}
                bg={'gray.3'}
                c={'black'}
                aria-label="decrease"
            >
                <IconMinus size={15} stroke={3}></IconMinus>
            </ActionIcon>
            <Text c={'black'}>{quantity}</Text>
            <ActionIcon
                onClick={onIncrease}
                size={30}
                bg={'gray.3'}
                c={'black'}
                aria-label="increase"
            >
                <IconPlus size={15} stroke={3}></IconPlus>
            </ActionIcon>

        </Group>
    </>
}