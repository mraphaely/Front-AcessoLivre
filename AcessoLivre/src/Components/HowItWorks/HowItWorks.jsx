import { FaHandsHelping, FaCommentDots, FaVolumeUp } from 'react-icons/fa';
import {
  HowSection,
  HowContainer,
  SectionTitle,
  CardsGrid,
  FeatureCard,
  IconCircle,
  CardTitle,
} from '../../Styles/HowItWorksStyles';

const features = [
  {
    id: 1,
    icon: <FaHandsHelping />,
    title: 'Interprete Instantâneo com VLibras',
    bg: '#D97F5C',
  },
  {
    id: 2,
    icon: <FaCommentDots />,
    title: 'Transcrição em Tempo Real',
    bg: '#A6D4F2',
  },
  {
    id: 3,
    icon: <FaVolumeUp />,
    title: 'Áudio Descrição',
    bg: '#96CAB4',
  },
];

function HowItWorks() {
  return (
    <HowSection>
      <HowContainer>
        <SectionTitle>Como funciona?</SectionTitle>
        <CardsGrid>
          {features.map((feature) => (
            <FeatureCard key={feature.id}>
              <IconCircle $bg={feature.bg}>{feature.icon}</IconCircle>
              <CardTitle>{feature.title}</CardTitle>
            </FeatureCard>
          ))}
        </CardsGrid>
      </HowContainer>
    </HowSection>
  );
}

export default HowItWorks;
