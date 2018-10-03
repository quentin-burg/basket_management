import React from 'react';
import styled from 'styled-components';
import BillBox from 'components/billBox';
import PropTypes from 'prop-types';
import TotalBox from 'components/totalBox';

const Container = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 20px;
  border: 1px solid;
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  margin: 20px;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;

class Bill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    function addArticlesPrices(articlesList) {
      const reducer = (sum, article) => article.price * article.quantity + sum;
      return articlesList.reduce(reducer, 0).toFixed(2);
    }

    return (
      <Container>
        <Title>Votre facture</Title>
        <Content>
          <BillBox articles={this.props.articles || []} />
          <Message>
            <div>Merci d'avoir commandé!</div>
            <TotalBox totalPrice={addArticlesPrices(this.props.articles)} />
          </Message>
        </Content>
      </Container>
    );
  }
}

Bill.propTypes = {
  articles : PropTypes.array,
};

export default Bill;
