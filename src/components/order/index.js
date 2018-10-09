import React from 'react';
import styled from 'styled-components';
import TotalBox from 'components/totalBox';
import CreditCardBox from 'components/creditCardBox';
import BillBox from 'components/billBox';
import PropTypes from 'prop-types';

const Container = styled.div`
  background-color: whitesmoke;
  height: 500px;
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  margin: 20px;
`;

const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-right: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;

class Order extends React.Component {
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
        <Title> Votre commande </Title>
        <Content>
          <BillBox articles={this.props.articles} />
          <CreditCardBox userId={this.props.userId} />
        </Content>
        <Total>
          <TotalBox totalPrice={addArticlesPrices(this.props.articles)} />
        </Total>
      </Container>
    );
  }
}

Order.propTypes = {
  userId   : PropTypes.string.isRequired,
  articles : PropTypes.array.isRequired,
};

export default Order;
