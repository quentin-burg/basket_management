import React from 'react';
import styled from 'styled-components';
import ValidateButton from 'components/validateButton';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const CreditCardBox = () => (
  <Container>
    <label>
      Numéro de la carte:
      <input type="text" name="number" />
    </label>
    <label>
      Date d expiration:
      <input type="text" name="exp_date" />
    </label>
    <label>
      Cryptogramme:
      <input type="text" name="crypto" />
    </label>
    <ValidateButton path="/bill" />
  </Container>
);

export default CreditCardBox;
