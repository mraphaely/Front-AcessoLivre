import {
  PageWrapper,
  PageContainer,
  PageTitle,
  PageText,
  PageCard,
  PageCardTitle,
} from '../../Styles/PageStyles';

const recursos = [
  {
    title: 'Interprete Instantâneo com VLibras',
    description:
      'Tradução automática de textos e áudios para Língua Brasileira de Sinais em tempo real.',
  },
  {
    title: 'Transcrição em Tempo Real',
    description:
      'Converta fala em texto instantaneamente para acompanhar conversas e conteúdos com facilidade.',
  },
  {
    title: 'Áudio Descrição',
    description:
      'Narrações automáticas que descrevem imagens, vídeos e elementos visuais da página.',
  },
];

function Recursos() {
  return (
    <PageWrapper>
      <PageContainer>
        <PageTitle>Recursos</PageTitle>
        <PageText>
          Conheça as ferramentas que tornam o Acesso Livre uma plataforma
          verdadeiramente inclusiva.
        </PageText>
        {recursos.map((recurso) => (
          <PageCard key={recurso.title}>
            <PageCardTitle>{recurso.title}</PageCardTitle>
            <PageText>{recurso.description}</PageText>
          </PageCard>
        ))}
      </PageContainer>
    </PageWrapper>
  );
}

export default Recursos;
