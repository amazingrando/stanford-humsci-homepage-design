import HeroParallax from '@/app/round-3/components/heroParallax';
import Header from "@/components/header.js";

export default {
  title: 'Round 3/Hero Parallax',
  component: HeroParallax,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="min-h-[300vh]">
        <Header />
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  name: 'Hero Parallax',
  args: {},
};