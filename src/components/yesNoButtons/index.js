import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
`;

const YesNoButtons = () => (
  <Container>
    <div>Yes</div>
    <div>No</div>
  </Container>
);

export default YesNoButtons;
