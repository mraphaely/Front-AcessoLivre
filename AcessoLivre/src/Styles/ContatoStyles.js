import styled from 'styled-components';

export const ContatoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) =>
    theme.name === 'dark' ? theme.colors.surface : theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  padding: 2rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 0.95rem;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 1rem;
  font-family: inherit;
  min-height: 140px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #FFFFFF;
  padding: 0.85rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  align-self: flex-start;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
  }
`;

export const SuccessAlert = styled.div`
  background-color: ${({ theme }) => theme.colors.accentLight};
  color: ${({ theme }) =>
    theme.name === 'dark' ? '#161616' : theme.colors.text};
  padding: 1rem;
  border-radius: 10px;
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
`;
