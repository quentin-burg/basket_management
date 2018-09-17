import React from 'react';
import styled from 'styled-components';
import Order from 'components/order';
import OrderLine from 'components/orderLine';
import TotalBox from '../totalBox';
import ValidateButton from '../validateButton';
import AskValidationBox from 'components/askValidationBox';
import Bill from 'components/bill';

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

/*const Home = () => (
  <Container>
    <Title> Voici votre panier </Title>
    <OrderLine />
    <Total>
      <TotalBox/>
      <ValidateButton/>
    </Total>


  </Container>
);*/

const Home = () => <Bill />;

export default Home;
