import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: lightgrey;
  display: flex;
  justify-content: flex-end;
`;

const ValidateButton = () => (
  <Container>
    <div>Valider</div>
  </Container>
);

export default ValidateButton;
