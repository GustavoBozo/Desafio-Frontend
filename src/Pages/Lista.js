import React, { useEffect, useState } from "react";
import { Accordion } from '@mantine/core';
import "./Lista.css"

function ListaGatos() {

    const [data, setData] = useState([])
    const [gatos, setGatos] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            await fetch("https://cataas.com/api/tags")
                .then((res) => res.json())
                .then((data) => {setData(data)})
        
            await fetch("https://cataas.com/api/cats")
                .then((res) => res.json())
                .then((gatos) => {setGatos(gatos)})
        }


        fetchData()
        
    }, [])
    

    //<Accordion.Panel>{item.description}</Accordion.Panel>
    //Espaço para a lista de gatos

    const items = data.filter(item => item !== "").map((item) => {
        
        
        
        return(

            <Accordion.Item key={item} value={item} className="accordion">
                <Accordion.Control className="control">{item}</Accordion.Control>
                <Accordion.Panel className="accordion-content">
                    {gatos.map((gato) => (

                        <div key={gato.id}>
                            {gato.tags.includes(item) ?
                                (<label>{gato.id}</label>) : null}
                        </div>
                    ))}
                </Accordion.Panel>
            </Accordion.Item>
        )
        
    });

    return (
        <Accordion className="teste">
            {items}
        </Accordion>    
    );
}

export default ListaGatos;
