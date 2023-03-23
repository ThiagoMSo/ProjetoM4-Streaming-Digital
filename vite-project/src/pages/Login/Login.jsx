import { Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

function Login() {
  return (
    <Container
      className="d-flex  flex-column justify-content-center align-items-center btn-flat rounded p-4 my-5 shadow text-white"
      style={{ maxWidth: 400, background: '#101010' }}>
      <img src={logo} width={350} alt="logo" />
      <Form className="w-100">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Insira seu email" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Insira sua senha" />
        </Form.Group>
        <Button variant="success" type="submit" className="w-100">
          Entrar
        </Button>
      </Form>
      <p className="mt-3 mb-0">
        Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </Container>
  );
}

export default Login;
