import React from 'react';
import styled from 'styled-components';
import NumericInput from 'react-numeric-input';
import Line from 'components/line';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  border: 1px solid;
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const OrderLine = ({ articles }) => (
  <Container>
    {articles.map(article => (
      <LineContainer key={article.id}>
        <Line article={article} key={article.id} />
        <NumericInput min={1} size={3} />
      </LineContainer>
    ))}
  </Container>
);

OrderLine.propTypes = {
  articles : PropTypes.array,
};
export default OrderLine;

// <Line article={article} />
//     <NumericInput min={1} size={3} />))}
