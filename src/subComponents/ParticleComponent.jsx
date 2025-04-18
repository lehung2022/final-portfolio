import styled from "styled-components";
import ConfigDark from "../config/particlesjs-config.json";
import ConfigLight from "../config/particlesjs-config-light.json";
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleWrapper = styled.div`
  position: absolute;
  top: 0;
`;

const ParticlesComponent = (props) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Box>
      <ParticleWrapper>
        <Particles
          id="tsparticles"
          options={props.theme === "light" ? ConfigLight : ConfigDark}
          init={particlesInit}
        />
      </ParticleWrapper>
    </Box>
  );
};

export default ParticlesComponent;
