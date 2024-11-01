import { Container, Title, Input, Button, Form, Link, NewAccountBox, InfoText, DescriptionBox, FlexContainer, FacebookTitle } from "./style";

export const Login = () => {
  return (
    <Container>
      <FlexContainer>
        <DescriptionBox>
          <FacebookTitle>facebook</FacebookTitle>
          <p>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</p>
        </DescriptionBox>
        <Form>
          <Input type="email" placeholder="E-mail ou telefone" required />
          <Input type="password" placeholder="Senha" required />
          <Button type="submit">Entrar</Button>
          <Link href="#">Esqueceu a senha?</Link>
          <NewAccountBox>Criar nova conta</NewAccountBox>
          <InfoText>
            <strong>Crie uma Página</strong> para uma celebridade, uma marca ou uma empresa.
          </InfoText>
        </Form>
      </FlexContainer>
    </Container>
  );
};
