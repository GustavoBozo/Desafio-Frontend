import React, { useEffect, useState, useRef } from 'react';
import { Input, CloseButton } from '@mantine/core';

function PrimeiraEtapa({validar, indice}) {
    
    const deveSalvar = useRef(true); // Nossa bandeira. Começa como true.

    const [campos, setCampos] = useState(() => {
        const dadosSalvos = localStorage.getItem("PrimeiraEtapa")
        if(dadosSalvos) {
            return JSON.parse(dadosSalvos)
        } else {
            return {
                email: '',
                senha: '',
                confirmar: ''
            }
        }
    }) 

    


    const [erroSenha, setErroSenha] = useState('');
    const [emailError, setEmailError] = useState('');


    useEffect(() => {
        const emailValido = campos.email.includes('@')
        const senhaValida = campos.senha.trim() !== ""
        const confirmarSenha = campos.confirmar.trim() === campos.senha.trim()

        const formularioValido = emailValido && senhaValida && confirmarSenha

        if(validar){
            validar(indice, formularioValido)
        }

        
        
       
        localStorage.setItem("PrimeiraEtapa", JSON.stringify(campos));
            

    }, [campos, validar, indice])

    
    useEffect(() => {
        
        if(campos.confirmar && campos.senha !== campos.confirmar) {
            setErroSenha("Senhas não são iguais")
        } else {
            setErroSenha('')
        }

        if(!campos.email.includes('@')){
            setEmailError("Email deve conter @")
        } else {
            setErroSenha('')
        }

    }, [campos])

    return (
        <>
            <Input.Wrapper label="Email" error={emailError}>
                <Input
                    placeholder="Email"
                    value={campos.email}
                    onChange={(event) => {
                        const value = event.currentTarget.value
                        setCampos((prev => ({...prev, email: value})))}
                    } 
                    required
                    rightSectionPointerEvents="all"
                    mt="md"
                    rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setCampos(prev => ({...prev, email: ''}))}
                        style={{ display: campos.email ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            <Input.Wrapper label="Senha">
                <Input
                    placeholder="Senha"
                    value={campos.senha}
                    onChange={(event) => {
                        const value = event.currentTarget.value
                        setCampos((prev => ({...prev, senha: value})))}
                    } 
                    rightSectionPointerEvents="all"
                    mt="md"
                    rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setCampos(prev => ({...prev, senha: ''}))}
                        style={{ display: campos.senha ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            <Input.Wrapper label="Confirmar Senha" error={erroSenha}>
                <Input
                    placeholder="Confirmar Senha"
                    value={campos.confirmar}
                    onChange={(event) => {
                        const value = event.currentTarget.value
                        setCampos((prev => ({...prev, confirmar: value})))}
                    } 
                    rightSectionPointerEvents="all"
                    mt="md"
                    rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setCampos(prev => ({...prev, confirm: ''}))}
                        style={{ display: campos.confirmar ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>
        </>
    )
}

export default PrimeiraEtapa;