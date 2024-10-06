import { useRive } from '@rive-app/react-canvas';
import React from 'react'

const Not_found = () => {
    const { rive, RiveComponent } = useRive({
        src: '/animation/404.riv',
        autoplay: true,
    });
    return (
        <>
            <RiveComponent
            />
        </>
    )
}

export default Not_found