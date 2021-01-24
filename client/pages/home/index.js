import { Container, Button, ButtonGroup, Col, Row, DropdownButton, Dropdown  } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../../styles/main.scss";

export default function Home({ users }) {

  return (<>

  <div className="header-home">
    <Container>
        <h1>Oi, {users.name}!</h1>
        <p>{users.email}</p>
        {/* <h3>{users.password}</h3> */}



        <h2>Informações do catálogo:</h2>

        <p>Endereço: {users.address}</p> 
        <p>Usuário do Instagram: {users.instagram}</p> 
        <p>WhatsApp: {users.phone}</p> 
        <p>Url do catálogo: https://meucatalogo.com/{users.username}</p> 
    </Container>
  </div>

  


  <Container>

    <Row>
      <Col md={6}>
        <h2>Meus produtos</h2>
      </Col>

      <Col md={6} className="text-right">
        <p>Adicionar produto</p>
      </Col>

    </Row>
    

    <Row className="product-list">
      <Col xs={6} md={4} xl={3}>
        <div className="item">

          <h3>Nome do produto</h3>
          <p>Descrição do produto</p>
          <p><b>Valor do produto</b></p>

          <a href="#">Botão de comprar</a>

        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Editar</Button>
          <Button variant="secondary">Excluir</Button>

          <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>

        </ButtonGroup>
        </div>
      </Col>

      <Col xs={6} md={4} xl={3}>
        <div className="item">

          <h3>Nome do produto</h3>
          <p>Descrição do produto</p>
          <p><b>Valor do produto</b></p>

          <a href="#">Botão de comprar</a>

        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Editar</Button>
          <Button variant="secondary">Excluir</Button>
        </ButtonGroup>
        </div>
      </Col>

      <Col xs={6} md={4} xl={3}>
        <div className="item">

          <h3>Nome do produto</h3>
          <p>Descrição do produto</p>
          <p><b>Valor do produto</b></p>

          <a href="#">Botão de comprar</a>

        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Editar</Button>
          <Button variant="secondary">Excluir</Button>
        </ButtonGroup>
        </div>
      </Col>

      <Col xs={6} md={4} xl={3}>
        <div className="item">

          <h3>Nome do produto</h3>
          <p>Descrição do produto</p>
          <p><b>Valor do produto</b></p>

          <a href="#">Botão de comprar</a>

        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Editar</Button>
          <Button variant="secondary">Excluir</Button>
        </ButtonGroup>
        </div>
      </Col>
    </Row>
  </Container>
       
    
  </>)
}

export const getStaticProps = async () => {

  const response = await fetch('http://localhost:5000/api/users/profile/leila');
  const data = await response.json();

  return {
    props: {
      users: data,
      revalidate: 600,
    }
  }
};