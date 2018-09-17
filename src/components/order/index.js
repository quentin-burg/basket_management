import React from 'react';
import styled from 'styled-components';
import TotalBox from '../totalBox';
import CreditCardBox from '../creditCardBox';
import BillBox from 'components/billBox';

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

const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Order = () => (
  <Container>
    <Title> Votre commande </Title>
    <Content>
      <BillBox />
      <CreditCardBox />
    </Content>
    <Total>
      <TotalBox />
    </Total>
  </Container>
);

export default Order;
