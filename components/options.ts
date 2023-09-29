import { ClickMode, type ISourceOptions } from "tsparticles-engine";

export const options: ISourceOptions = {
    fpsLimit: 40,
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
            },
        },
        color: {
            value: ["#fdcf58", "#fdcf58", "#fdcf58", "#fdcf58", "#fdcf58"],
        },
        opacity: {
            value: { min: 0.1, max: 0.5 },
        },
        size: {
            value: { min: 1, max: 3 },
        },
        move: {
            enable: true,
            speed: 6,
            random: false,
        },
    },
    interactivity: {
        detectsOn: "window",
        events: {
            onClick: {
                enable: true,
                // mode: ClickMode.push,
            },
            resize: true,
        },
    },
    background: {
        image: "radial-gradient(#000, #000)",
    },
};