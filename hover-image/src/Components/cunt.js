import React, { useState, useContext } from 'react';
import { Drawer, Button, Group } from '@mantine/core';


export default function Cunt() {

    const [opened, setOpened] = useState(false);

    return (
        <>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title="Register"
                padding="xl"
                size="xl"
            >
                {/* Drawer content */}
            </Drawer>

            <Group position="center">
                <Button onClick={() => setOpened(true)}>Open Drawer</Button>
            </Group>
        </>
    );
}