import News from '@/app/round-3/components/news';

export default {
  title: 'Round 3/News',
  component: News,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  name: 'News',
  args: {
    bgColor: 'bg-black-70',
  },
};