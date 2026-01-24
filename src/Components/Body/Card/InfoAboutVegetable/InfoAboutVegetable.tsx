import {Group, Text} from "@mantine/core";

type InfoAboutVegetableProps = {
    title: string;
    weight: string;
}

export function InfoAboutVegetable({title, weight}: InfoAboutVegetableProps) {


    return <>
        <Group gap={12}>
            <Text fz={18} fw={600} c={'black'}>{title}</Text> <Text fz={14} fw={600} tt={'lowercase'} c={'gray.5'}>{weight}</Text>
        </Group>
    </>
}