import { useNavigate } from 'react-router-dom';
import {
  PageWrapper,
  PageContainer,
  PageTitle,
  PageText,
} from '../../Styles/PageStyles';
import { CtaButton } from '../../Styles/TestimonialsStyles';

function NotFound() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <PageContainer style={{ textAlign: 'center', alignItems: 'center' }}>
        <PageTitle>404</PageTitle>
        <PageText>Ops! A página que você procura não foi encontrada.</PageText>
        <CtaButton onClick={() => navigate('/')}>Voltar para o início</CtaButton>
      </PageContainer>
    </PageWrapper>
  );
}

export default NotFound;
