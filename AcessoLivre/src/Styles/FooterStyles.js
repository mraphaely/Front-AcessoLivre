import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
