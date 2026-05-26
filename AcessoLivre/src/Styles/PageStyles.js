import styled from 'styled-components';

export const PageWrapper = styled.section`
  min-height: 60vh;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
`;

export const PageText = styled.p`
  color: ${({ theme }) => theme.colors.textSoft};
  font-size: 1.05rem;
  line-height: 1.7;
`;

export const PageCard = styled.div`
  background-color: ${({ theme }) =>
    theme.name === 'dark' ? theme.colors.surface : theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const PageCardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  font-weight: 700;
`;
