import ParallaxFeature from '../../app/round-3/components/parallaxFeature';

export default {
  title: 'Round 3/Parallax Feature',
  component: ParallaxFeature,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-black-90 min-h-[150vh] p-12 flex flex-col items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  name: 'Parallax Feature',
  args: {},
};
