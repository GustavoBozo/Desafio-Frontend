import "./Step.css";
import React, {useEffect, useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import PrimeiraEtapa from "./Forms/primeira-etapa";
import { IconCircleX } from '@tabler/icons-react';
import SegundaEtapa from "./Forms/segunda-etapa";
import TerceiraEtapa from "./Forms/terceira-etapa";
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

function StepsForms() {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const [etapasValidas, setEtapasValidas] = useState({})
    const [opened, { open, close }] = useDisclosure(false);


    const validarEtapas = (indice, valido) => {
        setEtapasValidas(prev => ({
            ...prev,
            [indice]: valido,
        }));
    };

    const [enviarForms, setEnviarForms] = useState(true)

    const [errorIcon_etapa1, setErrorIcon] = useState(false)
    const [errorIcon_etapa2, setErrorIcon2] = useState(false)
    const [errorIcon_etapa3, setErrorIcon3] = useState(false)
    const [key, setKey] = useState(0)


    //Effect para validação do enviar
    useEffect(() => {
        if(etapasValidas[0] === true 
            && etapasValidas[1] === true 
            && etapasValidas[2] === true){
                setEnviarForms(false)
            }
            else {
                setEnviarForms(true)
            }

            //Verificando etapa 1
            if(etapasValidas[0] === false){
                setErrorIcon(true)
            } else {
                setErrorIcon(false)
            }

            //Verificando etapa 2
            if(etapasValidas[1] === false){
                setErrorIcon2(true)
            } else {
                setErrorIcon2(false)
            }


            //Verificando etapa 3
            if(etapasValidas[2] === false){
                setErrorIcon3(true)
            } else {
                setErrorIcon3(false)
            }

            
    }, [etapasValidas])
    
    const limparFormulario = () => {    
        
        const primeiraLimpa = {

            email: '',
            senha: '',
            confirmar: ''
        }

        const segundaLimpa = {
            nome: '',
            sobrenome: '',
            data: null
        }

        const terceiraLimpa = {
            rua : '',
            numero : '',
            cep : '',
            bairro : '',
            estado : '',
            cidade : '',
            pais : '',
            complemento : ''
        }

        localStorage.setItem("PrimeiraEtapa", JSON.stringify(primeiraLimpa));
        localStorage.setItem("SegundaEtapa", JSON.stringify(segundaLimpa));
        localStorage.setItem("TerceiraEtapa", JSON.stringify(terceiraLimpa));

        
        setKey(prevKey => prevKey + 1); 
        
        
    };
    
    return (
        <div className='container'>
            <Stepper active={active} onStepClick={setActive} key={key}>
                <Stepper.Step label="Etapa 1" description="Dados Cadastrais" color={errorIcon_etapa1? "red" : null} completedIcon={errorIcon_etapa1 ? (<IconCircleX size={20}  />) : null}>
                    <PrimeiraEtapa validar={validarEtapas} indice={0} />
                </Stepper.Step>
                <Stepper.Step label="Etapa 2" description="Dados Pessoais" color={errorIcon_etapa2? "red" : null} completedIcon={errorIcon_etapa2 ? (<IconCircleX size={20}  />) : null}>
                    <SegundaEtapa validar2={validarEtapas} indice={1} />
                </Stepper.Step>
                <Stepper.Step label="Etapa 3" description="Endereço" color={errorIcon_etapa3? "red" : null} completedIcon={errorIcon_etapa3 ? (<IconCircleX size={20}  />) : null}>
                    <TerceiraEtapa validar2={validarEtapas} indice={2}/>
                </Stepper.Step>
                
            </Stepper>

            <Group justify="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Voltar</Button>
                <Button onClick={nextStep}>Avançar</Button>
                <Button disabled={enviarForms} onClick={open}>Enviar</Button>
                <Button onClick={limparFormulario}>Limpar Dados</Button>
            </Group>
        
            <Modal opened={opened} onClose={close} title="Authentication" centered>
                <p>Formulário enviado com sucesso !!</p>
                <Button onClick={close}>Ok</Button>
            </Modal>
        </div>

        
  );
}
export default StepsForms;