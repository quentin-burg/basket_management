import React from 'react';
import styled from 'styled-components';
import TotalBox from 'components/totalBox';
import CreditCardBox from 'components/creditCardBox';
import BillBox from 'components/billBox';
import withFetch from 'api';
import PropTypes from 'prop-types';

// TODO : manage with PropTypes

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

const Order = ({ articles }) => (
  <Container>
    <Title> Votre commande </Title>
    <Content>
      <BillBox articles={articles || []} />
      <CreditCardBox />
    </Content>
    <Total>
      <TotalBox />
    </Total>
  </Container>
);

Order.propTypes = {
  articles : PropTypes.array,
};

export default withFetch(Order, {
  method : 'GET',
  route  : 'http://localhost:5000/order/35',
});
