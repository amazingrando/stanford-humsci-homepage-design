import AnimatedBlock from '../../app/round-3/components/animatedBlock';

export default {
  title: 'Round 3/Animated Block',
  component: AnimatedBlock,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="p-16 pt-[50vh] bg-black-90 min-h-[300vh]">
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  name: 'Animated Block',
  args: {},
}; 