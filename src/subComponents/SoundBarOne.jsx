import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import music from "../assets/audio/track-18-monster-freak.mp3";
import trackOne from "../assets/audio/Fozzy - Enemy (Lyrics).mp3";
import trackTwo from "../assets/audio/Nightmare Zero Theme Song.mp3";
import trackThree from "../assets/audio/Track 19_Kurohagane Gamma.mp3";
import trackFour from "../assets/audio/Undying by Aviators Cover_320kbps.mp3";

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 2rem;
  top: 5rem;
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }
`;

const play = keyframes`
  0% { transform: scaleY(1); }
  50% { transform: scaleY(2); }
  100% { transform: scaleY(1); }
`;

const Line = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "click",
})`
  background: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.body};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;

const SoundBarOne = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const playlist = [music, trackOne, trackTwo, trackThree, trackFour];

  const handleClick = () => {
    setClick(!click);
    if (!click) ref.current.play();
    else ref.current.pause();
  };

  const handleEnded = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  useEffect(() => {
    if (ref.current && click) {
      ref.current.pause();
      ref.current.load();
      ref.current.play();
    }
  }, [currentTrack, click]);

  return (
    <Box onClick={() => handleClick()}>
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <audio ref={ref} src={playlist[currentTrack]} onEnded={handleEnded} />
    </Box>
  );
};

export default SoundBarOne;
