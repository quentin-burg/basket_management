import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

const TotalBox = () => (
  <Container>
    <div>Total: </div>
    <div>19€</div>
  </Container>
);

export default TotalBox;
