import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

const TotalBox = ({ totalPrice }) => (
  <Container>
    <div>Total: </div>
    <div>{totalPrice} €</div>
  </Container>
);

TotalBox.propTypes = {
  totalPrice : PropTypes.array,
};

export default TotalBox;
