import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle } from '@tabler/icons-react';
import ListaGatos from './Pages/Lista';
import StepsForms from './Pages/Step';
import { useState, useEffect } from 'react';

export default function Demo() {
  const [tabAtiva, setTabAtiva] = useState(() => {
    const tabSalva = localStorage.getItem('tabAtiva')

    return tabSalva || 'gatos'
  });

  useEffect(() => {

    localStorage.setItem('tabAtiva', tabAtiva)
  }, [tabAtiva])

  return (
    <Tabs value={tabAtiva} onChange={setTabAtiva} >
      <Tabs.List>
        <Tabs.Tab value="gatos" leftSection={<IconPhoto size={12} />}>
          Lista de Gatos
        </Tabs.Tab>
        <Tabs.Tab value="forms" leftSection={<IconMessageCircle size={12} />}>
          Step Forms
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gatos">
        <ListaGatos />
      </Tabs.Panel>

      <Tabs.Panel value="forms">
        <StepsForms />
      </Tabs.Panel>

    </Tabs>
  );
}