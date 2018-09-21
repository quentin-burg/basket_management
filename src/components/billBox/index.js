import React from 'react';
import styled from 'styled-components';
import BillLine from 'components/billLine';

const Container = styled.div`
  font-size: 20px;
  text-align: left;
  margin-bottom: 20px;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const BillBox = () => (
  <Container>
    <BillLine />
    <BillLine />
  </Container>
);

export default BillBox;
