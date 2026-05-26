import styled from 'styled-components';

export const HowSection = styled.section`
  padding: 4rem 2rem 5rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HowContainer = styled.div`
  width: 100%;
  max-width: 1100px;
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  margin-bottom: 3rem;
  font-weight: 700;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;

  @media (max-width: 800px) {
    gap: 1rem;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.2rem;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const IconCircle = styled.div`
  width: clamp(72px, 18vw, 150px);
  height: clamp(72px, 18vw, 150px);
  border-radius: 50%;
  background-color: ${({ $bg }) => $bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.8rem, 6vw, 4rem);
  color: #FFFFFF;
  box-shadow:
    0 10px 25px ${({ theme }) => theme.colors.shadow},
    ${({ theme }) =>
      theme.name === 'dark'
        ? '0 0 30px rgba(217, 127, 92, 0.25)'
        : 'inset 0 -8px 20px rgba(0,0,0,0.08)'};
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(0.78rem, 1.6vw, 1.15rem);
  font-weight: 700;
  max-width: 220px;
  line-height: 1.3;
`;
