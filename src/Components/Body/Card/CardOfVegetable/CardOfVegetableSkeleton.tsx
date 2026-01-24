import {Card, Skeleton} from "@mantine/core";
export function CardOfVegetableSkeleton() {
    return (
        <Card
            bg="white"
            radius={24}
            w={302}
            h={414}
            shadow="sm"
        >
            <Skeleton h={276} mt={16} radius={16}/>


        </Card>
    );
}