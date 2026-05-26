import { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useThemeToggle } from '../ThemeContext/ThemeContext';
import logo from '../../Public/Logo Acesso Livre.png';
import {
  HeaderWrapper,
  HeaderNav,
  LogoLink,
  NavList,
  NavItem,
  HeaderActions,
  StartButton,
  ThemeButton,
  MobileToggle,
} from '../../Styles/HeaderStyles';

function Header() {
  const { themeName, toggleTheme } = useThemeToggle();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <HeaderWrapper>
      <HeaderNav>
        <LogoLink to="/" onClick={closeMenu}>
          <img src={logo} alt="Acesso Livre" />
        </LogoLink>

        <NavList $open={open}>
          <li>
            <NavItem to="/sobre" onClick={closeMenu}>Sobre</NavItem>
          </li>
          <li>
            <NavItem to="/recursos" onClick={closeMenu}>Recursos</NavItem>
          </li>
          <li>
            <NavItem to="/blog" onClick={closeMenu}>Blog</NavItem>
          </li>
          <li>
            <NavItem to="/contato" onClick={closeMenu}>Contato</NavItem>
          </li>
        </NavList>

        <HeaderActions>
          <ThemeButton
            onClick={toggleTheme}
            aria-label={themeName === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
            title={themeName === 'light' ? 'Modo escuro' : 'Modo claro'}
          >
            {themeName === 'light' ? <FiMoon /> : <FiSun />}
          </ThemeButton>
          <StartButton to="/comecar">Começar</StartButton>
          <MobileToggle
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </MobileToggle>
        </HeaderActions>
      </HeaderNav>
    </HeaderWrapper>
  );
}

export default Header;
