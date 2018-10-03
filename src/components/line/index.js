import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 400px;
`;

const Line = ({ article }) => (
  <Container>
    <div>{article.name} </div>
    <div>{article.price}€</div>
  </Container>
);

Line.propTypes = {
  article : PropTypes.object.isRequired,
};

export default Line;
