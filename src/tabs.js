import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle } from '@tabler/icons-react';
import ListaGatos from './Pages/Lista';
import StepsForms from './Pages/Step';

export default function Demo() {
  return (
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto size={12} />}>
          Lista de Gatos
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle size={12} />}>
          Step Forms
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        <ListaGatos />
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        <StepsForms />
      </Tabs.Panel>

    </Tabs>
  );
}