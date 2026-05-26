import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroSection = styled.section`
  padding: 4rem 2rem 5rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 600px) {
    padding: 2rem 1rem 3rem;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  grid-template-areas:
    'content image'
    'buttons buttons';
  column-gap: 3rem;
  row-gap: 2rem;
  align-items: center;

  @media (max-width: 900px) {
    column-gap: 1.5rem;
    grid-template-columns: 1.3fr 1fr;
  }

  @media (max-width: 600px) {
    column-gap: 0.8rem;
    row-gap: 1.5rem;
    grid-template-columns: 1.4fr 1fr;
  }
`;

export const HeroContent = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  @media (max-width: 600px) {
    gap: 0.8rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(1.05rem, 3vw, 2.8rem);
  line-height: 1.2;
  font-weight: 700;
  word-break: break-word;

  span {
    color: ${({ theme }) => theme.colors.primary};
    display: block;
  }
`;

export const HeroText = styled.p`
  color: ${({ theme }) => theme.colors.textSoft};
  font-size: clamp(0.75rem, 1.8vw, 1.05rem);
  line-height: 1.5;
  max-width: 480px;
`;

export const HeroButtons = styled.div`
  grid-area: buttons;
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 901px) {
    justify-content: flex-start;
  }
`;

export const PrimaryButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.85rem 2.4rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.2s ease;
  display: inline-block;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    padding: 0.75rem 1.8rem;
    font-size: 0.95rem;
  }
`;

export const SecondaryButton = styled(Link)`
  background-color: ${({ theme }) =>
    theme.name === 'dark' ? theme.colors.surfaceAlt : '#FFFFFF'};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.85rem 2.4rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease;
  display: inline-block;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    padding: 0.75rem 1.8rem;
    font-size: 0.95rem;
  }
`;

export const HeroImageWrapper = styled.div`
  grid-area: image;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16 / 11;
  background: linear-gradient(120deg, #FFE6D2 0%, #F4F0EA 45%, #DCEEF9 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 40%;
    display: block;
  }
`;
