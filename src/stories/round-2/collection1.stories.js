import Collection1 from '@/app/round-2/components/collection1';
import { newsData } from '@/data/newsData';

export default {
  title: 'Round 2/Collection 1 Grid',
  component: Collection1,
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
  name: 'Collection 1 Grid',
  args: {
    newsData: newsData,
  },
}; 