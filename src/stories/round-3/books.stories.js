import Collection3 from '../../app/round-3/components/books';

export default {
  title: 'Round 3/Books',
  component: Collection3,
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
  name: 'Books',
  args: {},
}; 