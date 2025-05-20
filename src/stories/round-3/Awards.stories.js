import Awards from '@/app/round-3/components/awards';

export default {
  title: 'Round 3/Awards',
  component: Awards,
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
  name: 'Awards',
}; 