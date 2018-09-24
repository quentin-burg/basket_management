import React from 'react';
import history from 'utils/history';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const Button = styled.div`
  background-color: lightgrey;
  white-space: normal;
  border: solid black 2px;
  padding: 10px;
`;

const ValidateOrderButton = ({ path, action }) => (
  <Container>
    <Button
      onClick={() => {
        history.push(path);
        action();
      }}
    >
      Valider
    </Button>
  </Container>
);

ValidateOrderButton.propTypes = {
  path   : PropTypes.string.isRequired,
  action : PropTypes.func,
};

export default ValidateOrderButton;
