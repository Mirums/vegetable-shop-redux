import { Group } from "@mantine/core";
import {HeaderLeft} from "./HeaderParts/HeaderLeft/HeaderLeft.tsx";
import {HeaderRight} from "./HeaderParts/HeaderRight/HeaderRight.tsx";

export function Header() {
    return <>
        <Group justify={'space-between'}>
            <HeaderLeft/>
            <HeaderRight/>
        </Group>

    </>
}