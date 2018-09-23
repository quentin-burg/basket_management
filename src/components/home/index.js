import React from 'react';
import styled from 'styled-components';
import OrderLine from 'components/orderLine';
import TotalBox from 'components/totalBox';
import ValidateButton from 'components/validateButton';
import PropTypes from 'prop-types';
import withFetch from 'api';

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

const Home = ({ articles }) => (
  <Container>
    <Title> Voici votre panier </Title>
    <OrderLine articles={articles || []} />
    <Total>
      <TotalBox />
      <ValidateButton path="/order" />
    </Total>
  </Container>
);

Home.propTypes = {
  articles : PropTypes.array,
};
export default withFetch(Home, {
  route  : 'http://localhost:5000/order/35',
  method : 'GET',
});
