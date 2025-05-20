import Collection2 from '@/app/round-2/components/collection2';
import { newsData } from '@/data/newsData';

export default {
  title: 'Round 2/Collection 2 Slider',
  component: Collection2,
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
  name: 'Collection 2 Slider',
  args: {
    newsData: newsData,
  },
}; 