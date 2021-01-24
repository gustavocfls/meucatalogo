import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/main.scss"

import React, { useEffect, useState, useCallback } from 'react';
import { NextPage, GetStaticProps } from 'next';




export default function Index() {

  return (<>
    


    <section>
      <Container>
        <h1>Catálogo de produtos online grátis</h1>

        <p>O criador de catálogo online do Kyte é a forma fácil de montar sua vitrine digital e ter seus produtos na Internet. Comece a vender pelo catálogo e também pelo Facebook e Instagram.</p>

        <p>Você não precisa escolher entre vender online ou pessoalmente. O Kyte oferece um Ponto de Vendas no celular e uma loja virtual para vender no Instagram, Facebook e WhatsApp!</p>
      </Container>
    </section>

      
     
    
  </>)
}

