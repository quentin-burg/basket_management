import React from 'react';
import styled from 'styled-components';

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
  </Container>
);

export default Home;
