import './App.css'
import {Group, Text, Box, AppShell, Paper} from "@mantine/core";
import {CardOfVegetableSkeleton} from "./Components/Body/Card/CardOfVegetable/CardOfVegetableSkeleton.tsx";
import {CardOfVegetable} from "./Components/Body/Card/CardOfVegetable/CardOfVegetable.tsx";
import {Header} from "./Components/Header/Header.tsx";
import {useDispatch, useSelector} from "react-redux";
import type { RootState, AppDispatch } from './Components/store/store.ts'
import {useEffect} from "react";
import {fetchVegetables} from "./Components/store/vegetableSlice.ts";

function App() {
    const dispatch = useDispatch<AppDispatch>()
    const vegetables = useSelector((state: RootState) => state.vegetables.vegetables)
    const loading = useSelector((state: RootState) => state.vegetables.loading)
    useEffect(() => {
        dispatch(fetchVegetables())
    }, [dispatch])
    return <>
        <AppShell
            header={{height: 60}}
        >
            {/*--------------------------------------*/}
            {/*Шапка*/}
            <AppShell.Header >
                <Paper h={60} bg={'gray.0'} radius={0} shadow={'sm'}>
                    <Header/>
                </Paper>
            </AppShell.Header>
            {/*--------------------------------------*/}


            <AppShell.Main>
                <Box bg={'gray.1'}>
                    {/*--------------------------------------*/}
                    {/*Каталог текст*/}
                    <Text
                        mb={49}
                        ml={80}
                        pt={60}
                        fz={32}
                        fw={600}
                        c={'black'}
                    >Catalog</Text>
                    {/*--------------------------------------*/}

                    {/*--------------------------------------*/}
                    {/*карточки*/}
                    <Group justify="center">
                        {loading
                            ? Array.from({ length: 20 }).map((_, index) => (
                                <CardOfVegetableSkeleton key={index} />
                            ))
                            : vegetables.map(vegetable => (
                                <CardOfVegetable
                                    key={vegetable.id}
                                    id={vegetable.id}
                                    name={vegetable.name}
                                    price={vegetable.price}
                                    image={vegetable.image}
                                />
                            ))
                        }
                    </Group>
                    {/*--------------------------------------*/}
                </Box>
            </AppShell.Main>
        </AppShell>
    </>
}

export default App
