import React, { useEffect, useState } from "react";
import { DateInput } from '@mantine/dates';
import { Input, CloseButton } from '@mantine/core';

function SegundaEtapa({validar, indice}) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [data, setData] = useState<string  | null>(null);


    useEffect(() => {
        const nomeValido = nome.trim() !== ""
        const sobrenomeValido = sobrenome.trim() !== ""
        const dataValida = data.trim() !== ""

        const formularioValido = nomeValido && sobrenomeValido && dataValida

        if(validar){
            validar(indice, formularioValido)
        }
    
    }, [nome, sobrenome, data, validar, indice])

    return (
        <>
            <Input.Wrapper label="Nome">
                <Input
                placeholder="Nome"
                value={nome}
                onChange={(event) => setNome(event.currentTarget.value)}
                rightSectionPointerEvents="all"
                mt="md"
                rightSection={
                    <CloseButton
                    aria-label="Clear input"
                    onClick={() => setNome('')}
                    style={{ display: nome ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            
            <Input.Wrapper label="Sobrenome">
                <Input
                placeholder="Sobrenome"
                value={sobrenome}
                onChange={(event) => setSobrenome(event.currentTarget.value)}
                rightSectionPointerEvents="all"
                mt="md"
                rightSection={
                    <CloseButton
                    aria-label="Clear input"
                    onClick={() => setSobrenome('')}
                    style={{ display: sobrenome ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            <DateInput
                value={data}
                onChange={setData}
                label="Date input"
                placeholder="Date input"
            />
        </>
    )
}

export default SegundaEtapa;