import React from 'react'
import Particles from 'react-tsparticles'
import particleImg from '../assets/img/particle.svg'

function LandingPage() {

        
    // const particlesInit = (main) => {
    //     console.log(main);
    
    //     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // };
    
    // const particlesLoaded = (container) => {
    //     console.log(container);
    


    return (
        <>
            <Particles
                    id="tsparticles"
                    // init={particlesInit}
                    // loaded={particlesLoaded}
                    options={{
                        background: {
                        color: {
                            value: ({ theme }) => theme.colors.background,
                        },
                        },
                        fpsLimit: 30,
                        interactivity: {
                        events: {
                            // onClick: {
                            // enable: true,
                            // mode: "push",
                            // },
                            onHover: {
                            enable: false,
                            mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            // bubble: {
                            // distance: 400,
                            // duration: 2,
                            // opacity: 0.8,
                            // size: 40,
                            // },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 80,
                                duration: 0.3,
                            },
                        },
                        },
                        particles: {
                        color: {
                            random: true,
                            value: "#ffffff",
                        },
                        // destroy: {
                        //     mode: 'none',
                        //     split: {
                        //         count: 10,
                        //         factor: {
                        //             random: {
                        //                 enable: true,
                        //                 minimumValue: 0,

                        //             },
                        //             value: 5,
                        //         }
                        //     }
                        // },
                        // links: {
                        //     color: "#ffffff",
                        //     distance: 150,
                        //     enable: true,
                        //     opacity: 0.4,
                        //     width: 0.2,
                        //   },

                        collisions: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "none",
                            random: false,
                            speed: 3000,
                            straight: true,
                            noise: {
                                enable: true,
    
                            },
                            distance: {
                                horizontal: 1000,
                                vertical: 900,
                            },
                            vibrate: false,
                            warp: false,
                            trail: {
                                enable: false,
                                length: 5,
                            },
                        },
                        number: {
                            density: {
                            enable: true,
                            area: 600,
                            },
                            value: 5,
                        },
                        opacity: {
                            random: true,
                            value: 0.3,
                        },
                        shape: {
                            // type: 'image',
                            // 'image': {
                            //         'src': particleImg,
                            //         'width': '200px',
                            //         'height': '4px',
                            //         'replaceColor': false
                            //     },
                            type: 'character',
                            'character': {
                                'value': '_________-______________________________',
                                // 'style': {
                                //     'color': 'red',
                                // },
                            },

                        },
                        size: {
                            random: true,
                            value: 50,
                        },
                        },
                        detectRetina: true,
                    }}
            />
        </>
    )
}

export default LandingPage

