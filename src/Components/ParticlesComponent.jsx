import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesComponent = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
     options={{
  background: { color: "#ffffff" },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
    },
  },
  particles: {
    color: { value: "#000000" },
    links: {
      color: "#000000",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    collisions: { enable: false },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 1,
      straight: false,
    },
    number: { value: 40 },
    opacity: { value: 0.3 },
    shape: { type: "circle" },
    size: { value: 3 },
  },
  detectRetina: true,
}}

    />
  );
};

export default ParticlesComponent;
