import heroImage from '../../Public/Pessoas Falando em Libras 1.png';
import {
  HeroSection,
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  HeroImageWrapper,
} from '../../Styles/HeroStyles';

function Hero() {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            <span>Comunicação Acessível</span>
            para todos, sem exceção!
          </HeroTitle>
          <HeroText>
            Eliminamos barreiras para conectar pessoas com diferentes formas de
            comunicação, promovendo a inclusão de verdade.
          </HeroText>
        </HeroContent>

        <HeroImageWrapper>
          <img src={heroImage} alt="Duas pessoas se comunicando em Libras" />
        </HeroImageWrapper>

        <HeroButtons>
          <PrimaryButton to="/comecar">Começar</PrimaryButton>
          <SecondaryButton to="/sobre">Sobre</SecondaryButton>
        </HeroButtons>
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;
