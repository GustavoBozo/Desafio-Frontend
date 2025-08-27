import React, { useEffect, useState } from "react";
import { DateInput } from '@mantine/dates';
import { Input, CloseButton } from '@mantine/core';
import '@mantine/dates/styles.css';

function SegundaEtapa({validar2, indice}) {

    const [campos, setCampos] = useState(() => {
        const dadosSalvos = localStorage.getItem("SegundaEtapa")
        if(dadosSalvos) {
            const dados =  JSON.parse(dadosSalvos)
            
            return {
                ...dados,
                data: dados.data ? new Date(dados.data) : null,
            }
        } else {
            return {
                nome: '',
                sobrenome: '',
                data: null
            }
        }
    }) 

    useEffect(() => {
        const nomeValido = campos.nome.trim() !== ""
        const sobrenomeValido = campos.sobrenome.trim() !== ""
        const dataValida = campos.data !== null

        const formularioValido = nomeValido && sobrenomeValido && dataValida

        if(validar2){
            validar2(indice, formularioValido)
        }

        

        localStorage.setItem("SegundaEtapa", JSON.stringify(campos));
        
    
    }, [campos, validar2, indice])

    const handleData = (novaData) => {
        setCampos(prev => ({ ...prev, data: novaData }));
    }
    

    return (
        <>
            <Input.Wrapper label="Nome">
                <Input
                placeholder="Nome"
                value={campos.nome}
                    onChange={(event) => {
                        const value = event.currentTarget.value
                        setCampos((prev => ({...prev, nome: value})))}
                    } 
                rightSectionPointerEvents="all"
                mt="md"
                rightSection={
                    <CloseButton
                    aria-label="Clear input"
                    onClick={() => setCampos(prev => ({...prev, nome: ''}))}
                    style={{ display: campos.nome ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            
            <Input.Wrapper label="Sobrenome">
                <Input
                placeholder="Sobrenome"
                value={campos.sobrenome}
                onChange={(event) => {
                    const value = event.currentTarget.value
                    setCampos((prev => ({...prev, sobrenome: value})))}
                } 
                rightSectionPointerEvents="all"
                mt="md"
                rightSection={
                    <CloseButton
                    aria-label="Clear input"
                    onClick={() => setCampos(prev => ({...prev, sobrenome: ''}))}
                    style={{ display: campos.sobrenome ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            <DateInput
                value={campos.data}
                onChange={handleData}
                valueFormat="DD-MM-YYYY" 
                label="Data de Nascimento"
                placeholder="Data de Nascimento"
            />
        </>
    )
}

export default SegundaEtapa;