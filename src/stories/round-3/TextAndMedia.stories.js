import TextAndMedia from '../../app/round-3/components/textAndMedia';

export default {
  title: 'Round 3/Text and Media',
  component: TextAndMedia,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-black-90 min-h-screen p-12">
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  name: 'Text and Media',
  args: {},
};