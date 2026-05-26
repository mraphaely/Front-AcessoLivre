import styled from 'styled-components';

export const TestimonialsSection = styled.section`
  padding: 4rem 2rem 5rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TestimonialsContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

export const SectionHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 640px;
`;

export const Eyebrow = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(1.6rem, 3vw, 2rem);
  font-weight: 700;
`;

export const SectionDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  line-height: 1.6;
`;

export const CardsRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 460px;
  display: none;
  padding: 0 4.5rem 2.5rem;
  position: relative;

  @media (max-width: 900px) {
    display: block;
  }

  .carousel {
    overflow: visible;
  }

  .carousel-inner {
    overflow: hidden;
    border-radius: 14px;
  }

  .carousel-indicators {
    bottom: -2rem;
    margin: 0;

    button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primary} !important;
      opacity: 0.4;
      border: none;
    }

    .active {
      opacity: 1;
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 2.5rem;
    opacity: 1;
    top: 50%;
    transform: translateY(-50%);
    height: 2.5rem;
  }

  .carousel-control-prev {
    left: 0.25rem;
  }

  .carousel-control-next {
    right: 0.25rem;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background-size: 50% 50%;
    box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  }
`;

export const TestimonialCard = styled.div`
  background-color: ${({ theme }) =>
    theme.name === 'dark' ? '#1A1A1A' : theme.colors.cardBg};
  border: 1px solid
    ${({ theme }) =>
      theme.name === 'dark' ? theme.colors.primary : theme.colors.border};
  border-radius: 14px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px ${({ theme }) => theme.colors.shadow};
  }
`;

export const Avatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primarySoft};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const Quote = styled.p`
  color: ${({ theme }) => theme.colors.textSoft};
  font-size: 0.92rem;
  line-height: 1.55;
  font-style: italic;
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.95rem;
  font-weight: 500;
`;

export const CtaButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #FFFFFF;
  padding: 0.85rem 4rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.2s ease;
  box-shadow: 0 6px 18px ${({ theme }) => theme.colors.shadow};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
  }
`;
