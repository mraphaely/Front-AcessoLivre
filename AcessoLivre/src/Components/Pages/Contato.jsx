import { useState } from 'react';
import {
  PageWrapper,
  PageContainer,
  PageTitle,
  PageText,
} from '../../Styles/PageStyles';
import {
  ContatoForm,
  FormGroup,
  Label,
  Input,
  Textarea,
  SubmitButton,
  SuccessAlert,
} from '../../Styles/ContatoStyles';

function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ nome: '', email: '', mensagem: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <PageWrapper>
      <PageContainer>
        <PageTitle>Contato</PageTitle>
        <PageText>
          Tem dúvidas, sugestões ou quer parceria? Envie sua mensagem e nossa
          equipe responderá em breve.
        </PageText>

        {sent && <SuccessAlert>Mensagem enviada com sucesso!</SuccessAlert>}

        <ContatoForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              name="nome"
              type="text"
              value={form.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome completo"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea
              id="mensagem"
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              required
              placeholder="Escreva sua mensagem aqui..."
            />
          </FormGroup>

          <SubmitButton type="submit">Enviar mensagem</SubmitButton>
        </ContatoForm>
      </PageContainer>
    </PageWrapper>
  );
}

export default Contato;
