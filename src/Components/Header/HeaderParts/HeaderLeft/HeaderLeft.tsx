import {Group, Paper, Text} from "@mantine/core";

export function HeaderLeft() {
    return <>
        <Paper
            bg={'gray.2'}
            mt={13}
            ml={20}
            radius={31}>
            <Group gap={8}>
                <Text
                    fz={22}
                    fw={600}
                    pl={12}
                    c={'black'}
                >Vegetable</Text>
                <Paper
                    h={35}
                    pr={10}
                    radius={21}
                    bg={'brand.7'}
                    c={"gray.0"}>
                    <Text
                        pl={12}
                        mt={4}
                        tt={'uppercase'}
                        fw={500}
                    >shop</Text>
                </Paper>
            </Group>
        </Paper>
    </>
}