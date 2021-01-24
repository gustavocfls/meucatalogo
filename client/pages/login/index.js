import { Container, Button,Col, Row, Form  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Image from 'next/image'

export default function Index() {

    return (<>

    <section className="login d-flex align-items-center">

        <Container className="text-center">

        <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
        />

            <Form>
            <h1>Faça seu login</h1>

                <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>Digite seu e-mail cadastrado</Form.Label> */}
                    <Form.Control type="email" placeholder="Digite o seu e-mail cadastrado" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Entrar
                </Button>

                <p><a href="#">Esqueceu a senha?</a></p>

                <hr></hr>

                <Button variant="primary" type="submit">
                    Criar nova conta
                </Button>


                </Form>


        </Container>

        


    </section>


    <footer className="footer-login">
        <Container>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Cadastrar</a></li>
                <li><a href="#">Planos</a></li>
                <li><a href="#">Ajuda</a></li>
            </ul>

            <p>Scafeli © 2021</p>
        </Container>
    </footer>

    

    </>)
}