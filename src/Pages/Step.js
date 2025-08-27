import "./Step.css";
import React, {useEffect, useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import PrimeiraEtapa from "./Forms/primeira-etapa";
import { IconCircleX } from '@tabler/icons-react';
import SegundaEtapa from "./Forms/segunda-etapa";

function StepsForms() {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const [etapasValidas, setEtapasValidas] = useState({
        etapa1: false,
        etapa2: false,
        etapa3: false
    })

    const validarEtapas = (indice, valido) => {
        setEtapasValidas(prev => ({
            ...prev,
            [indice]: valido,
        }));
    };

    const [enviarForms, setEnviarForms] = useState(true)

    const [errorIcon, setErrorIcon] = useState(true)

    //Effect para validação do enviar
    useEffect(() => {
        if(etapasValidas.etapa1 === true 
            && etapasValidas.etapa2 === true 
            && etapasValidas.etapa3 === true){
                setEnviarForms(false)
            }
            else {
                setEnviarForms(true)
            }
        }, [etapasValidas])
    

    return (
        <div className='container'>
            <Stepper active={active} onStepClick={setActive}>
                <Stepper.Step label="Etapa 1" description="Dados Cadastrais" >
                    <PrimeiraEtapa validar={validarEtapas} indice={0} />
                </Stepper.Step>
                <Stepper.Step label="Etapa 2" description="Dados Pessoais">
                    <SegundaEtapa validar={validarEtapas} indice={1} />
                </Stepper.Step>
                <Stepper.Step label="Etapa 3" description="Endereço">
                    Step 3 content: Get full access
                </Stepper.Step>
                <Stepper.Completed>
                    Completed, click back button to get to previous step
                </Stepper.Completed>
            </Stepper>

            <Group justify="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next step</Button>
                <Button disabled={enviarForms}>Enviar</Button>
            </Group>
        </div>
  );
}
export default StepsForms;