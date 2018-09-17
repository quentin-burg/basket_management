import React from 'react';
import styled from 'styled-components';
import YesNoButtons from 'components/yesNoButtons';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  border: 1px solid;
  flex-direction: column;
  padding: 10px;
  text-align: center;
`;

const AskValidationBox = () => (
  <Container>
    <div>Êtes-vous sûr de vouloir supprimer cette ligne?</div>
    <YesNoButtons />
  </Container>
);

export default AskValidationBox;
