import {
  PageWrapper,
  PageContainer,
  PageTitle,
  PageText,
  PageCard,
  PageCardTitle,
} from '../../Styles/PageStyles';

const posts = [
  {
    title: 'Como tornar sua aplicação web acessível',
    date: '20 de maio de 2026',
    excerpt:
      'Princípios essenciais de acessibilidade digital que todo desenvolvedor deveria adotar nos seus projetos.',
  },
  {
    title: 'Libras na web: por onde começar?',
    date: '08 de maio de 2026',
    excerpt:
      'Entenda como integrar tradução automática para Libras e ampliar o alcance da sua plataforma.',
  },
  {
    title: 'Áudio descrição: incluindo quem não vê',
    date: '28 de abril de 2026',
    excerpt:
      'A importância da audiodescrição e como ela transforma a experiência de pessoas com deficiência visual.',
  },
];

function Blog() {
  return (
    <PageWrapper>
      <PageContainer>
        <PageTitle>Blog</PageTitle>
        <PageText>
          Conteúdos sobre acessibilidade, inclusão e tecnologia para todos.
        </PageText>
        {posts.map((post) => (
          <PageCard key={post.title}>
            <PageCardTitle>{post.title}</PageCardTitle>
            <PageText>
              <strong>{post.date}</strong>
            </PageText>
            <PageText>{post.excerpt}</PageText>
          </PageCard>
        ))}
      </PageContainer>
    </PageWrapper>
  );
}

export default Blog;
