import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5rem 2rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderNav = styled.nav`
  width: 100%;
  max-width: 1200px;
  background-color: ${({ theme }) =>
    theme.name === 'dark' ? '#1F1F1F' : '#FFFFFF'};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50px;
  padding: 0.6rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 18px ${({ theme }) => theme.colors.shadow};
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 56px;
    height: auto;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100%;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    position: absolute;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 16px;
    padding: 1rem 1.5rem;
    top: 80px;
    right: 2rem;
    gap: 1rem;
    height: auto;

    li {
      height: auto;
    }
  }
`;

export const NavItem = styled(Link)`
  display: inline-flex;
  align-items: center;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0.2rem;
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.25s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const StartButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.55rem 1.6rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transform: translateY(-1px);
  }
`;

export const ThemeButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transform: rotate(20deg);
  }
`;

export const MobileToggle = styled.button`
  display: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4rem;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
