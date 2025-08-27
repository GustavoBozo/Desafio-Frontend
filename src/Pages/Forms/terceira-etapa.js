import "./terceira-etapa.css"
import React, { useEffect, useState } from 'react';
import { Input, CloseButton } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function TerceiraEtapa({validar2, indice}) {

    



    const [validasCampos, setValidarCampos] = useState(() => {
        const dadosSalvos = localStorage.getItem("TerceiraEtapa")
        if(dadosSalvos){
            return JSON.parse(dadosSalvos)
        } else {
            return {
                rua : '',
                numero : '',
                cep : '',
                bairro : '',
                estado : '',
                cidade : '',
                pais : '',
                complemento : ''
            }
        }
    })


    useEffect(() => {

        const todosOsCamposSaoValidos = Object.values(validasCampos).every(valor => valor.trim() !== '');
        
        if(validar2){
            validar2(indice, todosOsCamposSaoValidos)
        }

       

        localStorage.setItem("TerceiraEtapa", JSON.stringify(validasCampos));
        
    
    }, [validasCampos, validar2, indice])

    return (
        <div className="container1">
            <Input.Wrapper label="Logradouro">
                <Input
                    placeholder="Logradouro"
                    value={validasCampos.rua}
                    onChange={(event) => {
                        const value = event.currentTarget.value
                        setValidarCampos(prev => ({...prev, rua: value}))}}
                    rightSectionPointerEvents="all"
                    mt="md"
                    rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setValidarCampos(prev => ({...prev, rua: ''}))}
                        style={{ display: validasCampos.rua ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            <Input.Wrapper label="Numero">
                <Input
                    placeholder="Numero"
                    type="number"
                    value={validasCampos.numero}
                    onChange={(event) => { const value = event.currentTarget.value 
                        setValidarCampos(prev => ({...prev, numero: value}))}}
                    rightSectionPointerEvents="all"
                    mt="md"
                    rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setValidarCampos(prev => ({...prev, numero: ''}))}
                        style={{ display: validasCampos.numero ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            <Input.Wrapper label="Complemento">
                <Input
                    placeholder="Complemento"
                    value={validasCampos.complemento}
                    onChange={(event) => { 
                        const value = event.currentTarget.value 
                        setValidarCampos(prev => ({...prev, complemento: value}))}}
                    rightSectionPointerEvents="all"
                    mt="md"
                    rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setValidarCampos(prev => ({...prev, complemento: ''}))}
                        style={{ display: validasCampos.complemento ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            <Input.Wrapper label="Cep">
                <Input
                    placeholder="0000-00"
                    component={IMaskInput}
                    mask="00000-000"
                    value={validasCampos.cep}
                    onAccept={(value) => setValidarCampos(prev => ({...prev, cep: value}))
                    }
                    rightSectionPointerEvents="all"
                    mt="md"
                    rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setValidarCampos(prev => ({...prev, cep: ''}))}
                        style={{ display: validasCampos.cep ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            <Input.Wrapper label="Bairro">
                <Input
                    placeholder="Bairro"
                    value={validasCampos.bairro}
                    onChange={(event) => {
                        const value = event.currentTarget.value
                        setValidarCampos(prev => ({...prev, bairro: value}))}
                    } 
                    rightSectionPointerEvents="all"
                    mt="md"
                    rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setValidarCampos(prev => ({...prev, bairro: ''}))}
                        style={{ display: validasCampos.bairro ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            <Input.Wrapper label="Estado">
                <Input
                    placeholder="Estado"
                    value={validasCampos.estado}
                    onChange={(event) => {
                        const value = event.currentTarget.value
                        setValidarCampos(prev => ({...prev, estado: value}))}
                    } 
                    rightSectionPointerEvents="all"
                    mt="md"
                    rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setValidarCampos(prev => ({...prev, estado: ''}))}
                        style={{ display: validasCampos.estado ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            <Input.Wrapper label="Cidade">
                <Input
                    placeholder="Cidade"
                    value={validasCampos.cidade}
                    onChange={(event) =>  {
                        const value = event.currentTarget.value
                        setValidarCampos(prev => ({...prev, cidade: value}))}
                    }
                    rightSectionPointerEvents="all"
                    mt="md"
                    rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setValidarCampos(prev => ({...prev, cidade: ''}))}
                        style={{ display: validasCampos.cidade ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            <Input.Wrapper label="País">
                <Input
                    placeholder="País"
                    value={validasCampos.pais}
                    onChange={(event) => {
                        const value = event.currentTarget.value
                        setValidarCampos(prev => ({...prev, pais: value}))}
                    } 
                    rightSectionPointerEvents="all"
                    mt="md"
                    rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setValidarCampos(prev => ({...prev, pais: ''}))}
                        style={{ display: validasCampos.pais ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>
        </div>
    )
}


export default TerceiraEtapa;