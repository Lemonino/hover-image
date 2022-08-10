import React, { useState, useContext } from 'react';
import { Drawer, Button, Group, Burger } from '@mantine/core';
import './Components.css'

export default function Cunt() {

    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    return (
        <>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title="Navigation"
                padding="xl"
                size="sm"
            >
               
            </Drawer>

            <Group position="center">
                <Button className="burger-button"  color="violet" onClick={() => setOpened(true)}>Open Drawer</Button>
            </Group>
        </>
    );
}