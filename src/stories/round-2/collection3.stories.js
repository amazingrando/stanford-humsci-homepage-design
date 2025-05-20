import Collection3 from '@/app/round-2/components/collection3';
import { newsData } from '@/data/newsData';

const mockNewsData = [
  {
    title: "The Future of AI: A Stanford Perspective",
    date: "March 15, 2025",
    description: "A groundbreaking exploration of artificial intelligence and its impact on society.",
    image: "https://placehold.co/600x400"
  },
  {
    title: "Climate Change and Human Adaptation",
    date: "March 10, 2025",
    description: "Examining how human societies adapt to changing environmental conditions.",
    image: "https://placehold.co/600x400"
  },
  {
    title: "The Art of Scientific Discovery",
    date: "March 5, 2025",
    description: "A deep dive into the creative process behind scientific breakthroughs.",
    image: "https://placehold.co/600x400"
  },
  {
    title: "Digital Humanities: New Frontiers",
    date: "March 1, 2025",
    description: "Exploring the intersection of technology and humanistic inquiry.",
    image: "https://placehold.co/600x400"
  }
];

export default {
  title: 'Round 2/Collection 3 Centered',
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
  name: 'Collection 3 Centered',
  args: {
    newsData: newsData
  },
}; 