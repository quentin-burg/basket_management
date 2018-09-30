import React from 'react';
import styled from 'styled-components';
import NumericInput from 'components/numericInput';
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
        <NumericInput value={article.quantity} />
      </LineContainer>
    ))}
  </Container>
);

OrderLine.propTypes = {
  articles : PropTypes.array,
};
export default OrderLine;
