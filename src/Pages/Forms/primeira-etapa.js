

import React, { useEffect, useState } from 'react';
import { Input, CloseButton } from '@mantine/core';

function PrimeiraEtapa({validar, indice}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState(''); 
    const [confirmar, setConfirmar] = useState('');


    const [erroSenha, setErroSenha] = useState('');


    useEffect(() => {
        const emailValido = email.includes('@')
        const senhaValida = senha.trim() !== ""
        const confirmarSenha = confirmar.trim() === senha.trim()

        const formularioValido = emailValido && senhaValida && confirmarSenha

        if(validar){
            validar(indice, formularioValido,)
        }

    }, [email, senha, confirmar, validar, indice])


    useEffect(() => {
        
        if(confirmar && senha !== confirmar) {
            setErroSenha("Senhas não são iguais")
        } else {
            setErroSenha('')
        }

    }, [senha, confirmar])

    return (
        <>
            <Input.Wrapper label="Email">
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    rightSectionPointerEvents="all"
                    mt="md"
                    rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setEmail('')}
                        style={{ display: email ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            <Input.Wrapper label="Senha">
                <Input
                    placeholder="Senha"
                    value={senha}
                    onChange={(event) => setSenha(event.currentTarget.value)}
                    rightSectionPointerEvents="all"
                    mt="md"
                    rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setEmail('')}
                        style={{ display: senha ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>

            <Input.Wrapper label="Confirmar Senha" error={erroSenha}>
                <Input
                    placeholder="Confirmar Senha"
                    value={confirmar}
                    onChange={(event) => setConfirmar(event.currentTarget.value)}
                    
                    rightSectionPointerEvents="all"
                    mt="md"
                    rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setConfirmar('')}
                        style={{ display: confirmar ? undefined : 'none' }}
                    />
                    }
                />
            </Input.Wrapper>
        </>
    )
}

export default PrimeiraEtapa;