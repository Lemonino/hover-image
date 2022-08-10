import React, { useState, useContext } from 'react';
import { Drawer, Button, Group } from '@mantine/core';
import './Components.css'

export default function Cunt(props) {

    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    const handleAboutMeClick = () => {
        props.aboutMe.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handlExperienceClick = () => {
        props.experience.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const handleSocialsClick = () => {
        props.socials.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title="Navigation"
                padding="xl"
                size="sm"

            >
                <Button color="grape" radius="md" className='SideNav-button' onClick={handleAboutMeClick}>
                    About Me
                </Button>

                <Button color="grape" radius="md" className='SideNav-button' onClick={handlExperienceClick}>
                    Experience
                </Button>

                <Button color="grape" radius="md" className='SideNav-button' onClick={handleSocialsClick}>
                   Contact Me
                </Button>

            </Drawer>

            <Group position="center">
                <Button className="burger-button" color="violet" onClick={() => setOpened(true)}>Open Drawer</Button>
            </Group>
        </>
    );
}