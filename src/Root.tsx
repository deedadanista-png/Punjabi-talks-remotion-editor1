import React from 'react';
import { Composition } from 'remotion';
import {
  PunjabiTalksVideo,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
  VIDEO_DURATION_FRAMES
} from './Video';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="PunjabiTalksVideo"
      component={PunjabiTalksVideo}
      durationInFrames={VIDEO_DURATION_FRAMES}
      fps={VIDEO_FPS}
      width={VIDEO_WIDTH}
      height={VIDEO_HEIGHT}
    />
  );
};
