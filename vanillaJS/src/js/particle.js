const options = {
    particles: {
        move: {
            enable: true,
            speed: { min: 0.5, max: 2 },
        },
        links: {
            enable: true,
            opacity: 0.3,
            distance: 200,
            color: {
                value: ["#be3d90", "#505fd0", "#0476fd"],
            },
        },
        size: {
            value: { min: 1, max: 3 },
        },
        opacity: {
            value: { min: 0.3, max: 0.7 },
        },
        color: {
            value: ["#ffffff", "#be3d90", "#505fd0", "#0476fd"],
        },
    },
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
        },
        modes: {
            push: {
                quantity: 6,
            },
            repulse: {
                distance: 100,
            },
        },
    },
};

tsParticles.load("tsparticles", options);