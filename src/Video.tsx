import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  interpolate
} from 'remotion';

export const VIDEO_FPS = 30;
export const VIDEO_WIDTH = 1920;
export const VIDEO_HEIGHT = 1080;

// ابتدائی ٹیسٹ: 10 سیکنڈ
export const VIDEO_DURATION_FRAMES = 30 * 10;

const captions = [
  {
    from: 0,
    duration: 90,
    text: 'یہاں اپنا پہلا اردو سب ٹائٹل لکھیں'
  },
  {
    from: 90,
    duration: 90,
    text: 'اہم الفاظ کو یہاں نمایاں کریں'
  }
];

const Caption: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 8, 82, 90],
    [0, 1, 1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp'
    }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 90
      }}
    >
      <div
        style={{
          opacity,
          color: 'white',
          background: 'rgba(0,0,0,0.75)',
          border: '2px solid #D6A84F',
          borderRadius: 12,
          padding: '16px 32px',
          fontSize: 48,
          direction: 'rtl',
          textAlign: 'center',
          maxWidth: '86%'
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};

export const PunjabiTalksVideo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: '#0B3D2E' }}>
    <OffthreadVideo
      src={staticFile('media/source.mp4')}
      startFrom={0}
      endAt={VIDEO_DURATION_FRAMES}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain'
      }}
    />

    {captions.map((caption, index) => (
      <Sequence
        key={index}
        from={caption.from}
        durationInFrames={caption.duration}
      >
        <Caption text={caption.text} />
      </Sequence>
    ))}
  </AbsoluteFill>
);
