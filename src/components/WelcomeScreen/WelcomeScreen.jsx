import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Clouds from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three';

const WelcomeScreen = ({ children }) => {
    const miRefDiv = useRef(null);
    const [vanta, setVanta] = useState(0);
    
    useEffect(() => {
        if (!vanta) {
            setVanta(
                Clouds({
                    THREE,
                    el: miRefDiv.current
                }))
        }
        return () => {
            if (vanta) {
                vanta.destroy();
            }
        }
    }, [vanta])

    return (
        <div className="full" ref={miRefDiv}>
            {children}
        </div>
    );
};

WelcomeScreen.propTypes = {
    children: PropTypes.node,

};

export default WelcomeScreen;