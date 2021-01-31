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

  return (
  <>

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


{user.products.map(( products ) => (

<Col xs={6} md={4} xl={3} key={products._id}>
  <div className="item">

  {/* 
  
  PRECISA ADICIONAR O NOME DO PROVEDOR NO NEXT.CONFIG PRA IMAGEM APARECER
  
  
  <Image
        src={`${(products.photo)}`}
        alt={products.title}
        width={120}
        height={120}
      /> */}

    <img src={`${(products.photo)}`} />

    <p className="title-product">{products.title}</p>
    {/* <p>{products.photo}</p> */}
    <p className="price-product">R${products.price}</p>

    <a className="btn-comprar" target="_blank" href={`https://wa.me/55${encodeURIComponent(user.phone)}?text=Olá!%20Eu%20gostaria%20de%20comprar%20o%20produto:%20*${(products.title)}*`}>Botão de comprar</a>

  </div>
</Col>
))} 




    </Row>
</Container>
      

    </section>

    <footer>


      <Container>
        <p>{user.address}</p>
        <p><a className="footer-credits" href="#">Feito com ❤️ por Gustavo</a></p>
      </Container>

    </footer>
    
    
  </>)
}




export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:5000/api/users`);
  const data = await response.json();

  const paths = data.map(member => {
    return { params: { 
      username: member.username,
      products: []
    } }
  });

  return {
    paths,
    fallback: true, 
  }
}

export const getStaticProps = async (context) => {
  const { username } = context.params;
  // const { products } = context.params;

  const response = await fetch(`http://localhost:5000/api/users/profile/${username}`);
  const data = await response.json();
  
  return {
    props: {
      user: data,
      products: []
    },
    revalidate: 10,
  }
}