import React from 'react';
import styled from 'styled-components';
import NumericInput from 'react-numeric-input';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  margin: 10px;
  border: 1px solid;
`;

const OrderLine = () => (
  <Container>
    <div>Article</div>
    <div>1€20</div>
    <NumericInput min={1} size={3} />
  </Container>
);

export default OrderLine;
