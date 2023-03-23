import React, { useState } from 'react';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import styles from './formulario.module.css';
import validator from 'validator';

function Formulario() {
    const [validado, setValidado] = useState(false);
    const [senha, setSenha] = useState('');
    const [senhaError, setSenhaError] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else if (senha !== confirmarSenha) {
            event.preventDefault();
            event.stopPropagation();
            setSenhaError('As senhas não coincidem');
        }
        setValidado(true);
    };

    const handleSenhaBlur = () => {
        if (!validator.isLength(senha, { min: 8, max: 20 })) {
            setSenhaError('Sua senha deve ter de 8 a 20 caracteres');
        } else if (!validator.isAlphanumeric(senha)) {
            setSenhaError('Sua senha deve conter letras e números');
        } else {
            setSenhaError('');
        }
    };

    return (
        <Container className={styles.Container}>
            <h2> Cadastro </h2>
            <Form noValidate validated={validado} onSubmit={handleSubmit}>
                <Form.Group className="mb-3 text-white" controlId="formName">
                    <Form.Label style={{fontFamily:"roboto"}}>Nome</Form.Label>
                    <Form.Control className="rounded" type="name" placeholder="Digite seu nome" required />
                    <Form.Control.Feedback type="invalid" style={{fontFamily:"roboto"}}>
                        Por favor, digite seu nome
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label style={{fontFamily:"roboto"}}>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" required />
                    <Form.Control.Feedback type="invalid" style={{fontFamily:"roboto"}}>
                        Por favor, digite seu E-mail
                    </Form.Control.Feedback>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formTelefone">
                        <Form.Label style={{fontFamily:"roboto"}}>Telefone</Form.Label>
                        <Form.Control className="rounded" type="tel" placeholder="Digite seu telefone" required />
                        <Form.Control.Feedback type="invalid" style={{fontFamily:"roboto"}}>
                            Por favor, digite seu telefone
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formCPF">
                        <Form.Label style={{fontFamily:"roboto"}}>CPF</Form.Label>
                        <Form.Control className="rounded" type="text" placeholder="Digite seu CPF" required />
                        <Form.Control.Feedback type="invalid" style={{fontFamily:"roboto"}}>
                             Por favor, digite seu CPF
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formSenha">
                        <Form.Label style={{fontFamily:"roboto"}}> Senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="digite sua senha aqui"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            onBlur={handleSenhaBlur}
                            isInvalid={!!senhaError}/>
                        <Form.Control.Feedback type="invalid">
                            {senhaError || 'Por favor, digite sua senha'}
                        </Form.Control.Feedback>
                        <Form.Text id="SenhaBlock" muted style={{fontFamily:"roboto"}}>
                            Sua senha deve ter de 8 a 20 caracteres, conter letras e números
                        </Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formConfsenha">
                        <Form.Label style={{fontFamily:"roboto"}}>Confirmar Senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirme sua senha"
                            required
                            isInvalid={senha !== confirmarSenha}
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid" style={{fontFamily:"roboto"}}>
                            As senhas não coincidem
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button variant="success" className="float-end" type="submit" >
                    CADASTRAR
                </Button>
            </Form>
        </Container>
    );
}

export default Formulario;

