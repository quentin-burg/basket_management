import React from 'react';
import styled from 'styled-components';
import OrderLine from 'components/orderLine';
import TotalBox from 'components/totalBox';
import ValidateButton from 'components/validateButton';

const Container = styled.div`
  background-color: whitesmoke;
  height: 500px;
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  margin: 20px;
`;

const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-right: 10px;
`;

const Home = () => (
  <Container>
    <Title> Voici votre panier </Title>
    <OrderLine />
    <Total>
      <TotalBox />
      <ValidateButton />
    </Total>
  </Container>
);
export default Home;
