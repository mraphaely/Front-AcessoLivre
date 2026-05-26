import { FaHandsHelping, FaCommentDots, FaVolumeUp } from 'react-icons/fa';
import {
  PageWrapper,
  PageContainer,
  PageTitle,
  PageText,
  PageCard,
  PageCardTitle,
} from '../../Styles/PageStyles';

const passos = [
  {
    icon: <FaHandsHelping />,
    title: '1. Escolha o recurso',
    text: 'Selecione entre VLibras, transcrição em tempo real ou audiodescrição.',
  },
  {
    icon: <FaCommentDots />,
    title: '2. Conecte-se',
    text: 'Integre a ferramenta diretamente no seu navegador ou aplicação.',
  },
  {
    icon: <FaVolumeUp />,
    title: '3. Comunique-se',
    text: 'Aproveite uma experiência sem barreiras para todos os usuários.',
  },
];

function Comecar() {
  return (
    <PageWrapper>
      <PageContainer>
        <PageTitle>Vamos começar!</PageTitle>
        <PageText>
          Em três passos simples você inicia sua jornada com o Acesso Livre.
        </PageText>
        {passos.map((passo) => (
          <PageCard key={passo.title}>
            <PageCardTitle>{passo.title}</PageCardTitle>
            <PageText>{passo.text}</PageText>
          </PageCard>
        ))}
      </PageContainer>
    </PageWrapper>
  );
}

export default Comecar;
