import React, { useState } from 'react'
import { Modal, Button, Group } from '@mantine/core';

export default function Modalz() {
    const [opened, setOpened] = useState(false);


        return (
            <>
              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Contact information"
              >
                {/* Modal content */}
                <p1>Mobile: +65 96547508</p1>
                <br></br>
                <p1>Email: BryannPWJ@outlook.com</p1>
              </Modal>
        
              <Group position="center">
                <Button onClick={() => setOpened(true)}>Contact me</Button>
              </Group>
            </>
          );
}


