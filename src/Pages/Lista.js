import React, { useEffect, useState } from "react";
import { Accordion } from '@mantine/core';


function ListaGatos() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://cataas.com/api/tags")
            .then((res) => res.json())
            .then((data) => {
            setData(data)
        })
    }, [])
    

    //<Accordion.Panel>{item.description}</Accordion.Panel>
    //Espaço para a lista de gatos

    const items = data.filter(item => item !== "").map((item) => (
        
        <Accordion.Item key={item} value={item}>
            <Accordion.Control>{item}</Accordion.Control>
            <Accordion.Panel></Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <Accordion>
            {items}
        </Accordion>    
    );
}

export default ListaGatos;
