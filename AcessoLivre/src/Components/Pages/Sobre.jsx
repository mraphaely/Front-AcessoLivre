import {
  PageWrapper,
  PageContainer,
  PageTitle,
  PageText,
  PageCard,
  PageCardTitle,
} from '../../Styles/PageStyles';

function Sobre() {
  return (
    <PageWrapper>
      <PageContainer>
        <PageTitle>Sobre o Acesso Livre</PageTitle>
        <PageText>
          O Acesso Livre nasceu para eliminar barreiras de comunicação. Nossa
          missão é conectar pessoas com diferentes formas de comunicação,
          promovendo a inclusão de verdade através da tecnologia.
        </PageText>
        <PageCard>
          <PageCardTitle>Missão</PageCardTitle>
          <PageText>
            Promover acessibilidade e inclusão digital, garantindo que todas as
            pessoas possam se comunicar livremente.
          </PageText>
        </PageCard>
        <PageCard>
          <PageCardTitle>Visão</PageCardTitle>
          <PageText>
            Um mundo onde acessibilidade não seja exceção, mas regra em todas as
            interações digitais.
          </PageText>
        </PageCard>
        <PageCard>
          <PageCardTitle>Valores</PageCardTitle>
          <PageText>
            Inclusão, empatia, inovação e respeito à diversidade humana.
          </PageText>
        </PageCard>
      </PageContainer>
    </PageWrapper>
  );
}

export default Sobre;
