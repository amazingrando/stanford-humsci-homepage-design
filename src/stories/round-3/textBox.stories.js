import TextBox from '../../app/round-3/components/textBox';
import bgImage from '@/assets/images/moment/01_lone-valley-oak-rainbow-and-photographer_danquinn.webp';

export default {
  title: 'Round 3/Text Box',
  component: TextBox,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  name: 'Text Box',
  args: {
    bgImage,
  },
}; 