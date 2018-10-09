import React from 'react';
import styled from 'styled-components';
import Line from 'components/line';
import PropTypes from 'prop-types';

const Container = styled.div`
  font-size: 20px;
  text-align: left;
  margin-bottom: 20px;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

class BillBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        {this.props.articles.map(article => (
          <Line article={article} key={article.id} />
        ))}
      </Container>
    );
  }
}

BillBox.propTypes = {
  articles : PropTypes.array,
};

export default BillBox;
