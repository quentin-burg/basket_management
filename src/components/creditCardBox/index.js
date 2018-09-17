import React from 'react';
import styled from 'styled-components';
import validateButton from 'components/validateButton';
import ValidateButton from '../validateButton';

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
      Date d'expiration:
      <input type="text" name="exp_date" />
    </label>
    <label>
      Cryptogramme:
      <input type="text" name="crypto" />
    </label>
    <ValidateButton />
  </Container>
);

export default CreditCardBox;
