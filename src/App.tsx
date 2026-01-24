import './App.css'
import {useEffect, useState} from 'react'
import ky from "ky";
import {Group, Text, Box, AppShell, Paper} from "@mantine/core";
import {CardOfVegetableSkeleton} from "./Components/Body/Card/CardOfVegetable/CardOfVegetableSkeleton.tsx";
import {CardOfVegetable} from "./Components/Body/Card/CardOfVegetable/CardOfVegetable.tsx";
import {Header} from "./Components/Header/Header.tsx";


type Vegetable = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

function App() {
    const [vegetables, setVegetables] = useState<Vegetable[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function getVegetables() {
            setLoading(true)
            const data = await ky
                .get('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
                .json() as Vegetable[];
            setVegetables(data)
            setLoading(false)
        }

        getVegetables()
    }, [])
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
