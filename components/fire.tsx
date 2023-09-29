'use client'
import React, {useCallback} from 'react'
import type { Container, Engine } from "tsparticles-engine";
import Particles from 'react-particles'
import {loadFull} from 'tsparticles'
import { options } from './options';


const ParticleContainer = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
        //await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    
  return (
<Particles

            className=''
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
        />
  )
}

export default ParticleContainer
