import React from 'react';
import styled from 'styled-components';
import BillBox from 'components/billBox';

const Container = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 20px;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  margin: 20px;
`;

const Message = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Bill = () => (
  <Container>
    <Title>Votre facture</Title>
    <BillBox />
    <Message>
      <div>Merci d'avoir commandé!</div>
      <div>Votre numéro de facture est le: xxxxxx</div>
    </Message>
  </Container>
);

export default Bill;
