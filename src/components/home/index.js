import React from 'react';
import styled from 'styled-components';
import OrderLine from 'components/orderLine';

const Container = styled.div`
  background-color: whitesmoke;
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
`;

const Home = () => (
  <Container>
    <Title> Voici votre panier </Title>
    <OrderLine />
  </Container>
);

export default Home;
