import { useRouter } from 'next/router';



import { Container, Button, ButtonGroup, Col, Row, DropdownButton, Dropdown  } from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link'

// import 'bootstrap/dist/css/bootstrap.min.css';




export default function Catalogo({ user }) {
  const router = useRouter();
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  

  return (<>


  <header className="header-profile">

    <Container>
      <Image
        src="/logo.png"
        alt="Logo"
        width={120}
        height={120}
      />
    </Container>

  </header>
    
    <section className="hero-profile">

    <Container>

      <div className="content">

      {/* <img src={user.avatar_url} alt={user.name} width="80" style={{ borderRadius: 40 }} /> */}
      <h1>{user.name}</h1>
      <p>{user.description}</p>

      <ul>
        <li>
          <Link
            href={`https://instagram.com/${encodeURIComponent(user.instagram)}`}>
            <a target="_blank"><i class="fab fa-instagram"></i> Instagram</a>
          </Link>
        </li>

        <li>
          <Link
            href={`https://wa.me/${encodeURIComponent(user.phone)}`}>
            <a target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
          </Link>
        </li>

        <li>
          <Link
            href={`https://www.google.com.br/maps/place/${encodeURIComponent(user.address)}`}>
            <a target="_blank"><i class="fas fa-map-marker-alt"></i> Como chegar</a>
          </Link>
        </li>
        
      </ul>

      </div>

    </Container>

    </section>

    <section className="catalog">

<Container>
<Row className="product-list">
      <Col xs={6} md={4} xl={3}>
        <div className="item">

          <img src="https://catalogo-sda.vercel.app/produtos/002.jpg" />

          <h3>Nome do produto</h3>
          <p>Descrição do produto</p>
          <p><b>R$79,90</b></p>

          <a href="https://wa.me/1XXXXXXXXXX?text=Eu%20tenho%20interesse%20no% {products.title}">Botão de comprar</a>

        </div>
      </Col>

      <Col xs={6} md={4} xl={3}>
        <div className="item">

        <img src="https://catalogo-sda.vercel.app/produtos/002.jpg" />

          <h3>Nome do produto</h3>
          <p>Descrição do produto</p>
          <p><b>Valor do produto</b></p>

          <a href="#">Botão de comprar</a>

        </div>
      </Col>

      <Col xs={6} md={4} xl={3}>
        <div className="item">


        <img src="https://catalogo-sda.vercel.app/produtos/002.jpg" />

          <h3>Nome do produto</h3>
          <p>Descrição do produto</p>
          <p><b>Valor do produto</b></p>

          <a href="#">Botão de comprar</a>

     
        </div>
      </Col>

      <Col xs={6} md={4} xl={3}>
        <div className="item">

        <img src="https://catalogo-sda.vercel.app/produtos/002.jpg" />

          <h3>Nome do produto</h3>
          <p>Descrição do produto</p>
          <p><b>Valor do produto</b></p>

          <a href="#">Botão de comprar</a>

    
        </div>
      </Col>

      <Col xs={6} md={4} xl={3}>
        <div className="item">

        <img src="https://catalogo-sda.vercel.app/produtos/002.jpg" />

          <h3>Nome do produto</h3>
          <p>Descrição do produto</p>
          <p><b>Valor do produto</b></p>

          <a href="#">Botão de comprar</a>

    
        </div>
      </Col>

      <Col xs={6} md={4} xl={3}>
        <div className="item">

        <img src="https://catalogo-sda.vercel.app/produtos/002.jpg" />

          <h3>Nome do produto</h3>
          <p>Descrição do produto</p>
          <p><b>Valor do produto</b></p>

          <a href="#">Botão de comprar</a>

    
        </div>
      </Col>

      <Col xs={6} md={4} xl={3}>
        <div className="item">

        <img src="https://catalogo-sda.vercel.app/produtos/002.jpg" />

          <h3>Nome do produto</h3>
          <p>Descrição do produto</p>
          <p><b>Valor do produto</b></p>

          <a href="#">Botão de comprar</a>

    
        </div>
      </Col>
    </Row>
</Container>
      

    </section>

    <footer>


      <Container>
        <p>{user.address}</p>
        <p><a href="#">Feito com ❤️ por Gustavo</a></p>
      </Container>

    </footer>
    
    
  </>)
}

export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:5000/api/users`);
  const data = await response.json();

  const paths = data.map(member => {
    return { params: { username: member.username } }
  });

  return {
    paths,
    fallback: true, 
  }
}

export const getStaticProps = async (context) => {
  const { username } = context.params;

  const response = await fetch(`http://localhost:5000/api/users/profile/${username}`);
  const data = await response.json();
  
  return {
    props: {
      user: data,
    },
    revalidate: 10,
  }
}