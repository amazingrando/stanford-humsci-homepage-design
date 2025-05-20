import InTheMoment from '../../app/round-3/components/inTheMoment';

export default {
  title: 'Round 3/InTheMoment',
  component: InTheMoment,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="p-16 bg-black-90">
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  name: 'In The Moment',
  args: {},
}; 