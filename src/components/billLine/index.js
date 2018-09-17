import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: left;
  width: 400px;
`;

const BillLine = () => (
  <Container>
    <div>Article </div>
    <div> 1€20 </div>
    <div> 4 </div>
  </Container>
);

export default BillLine;
