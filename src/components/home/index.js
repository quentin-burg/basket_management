import React from 'react';
import styled from 'styled-components';
import OrderLine from 'components/orderLine';
import TotalBox from 'components/totalBox';
import ValidateOrderButton from 'components/validateOrderButton';
import callApi from 'api';
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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles         : [],
      articlesQuantity : {},
    };
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    callApi({ method : 'GET', route : 'http://localhost:5000/order/35' })
      .then(({ articles }) => {
        this.setState({ articles });
        return Promise.resolve(articles);
      })
      .then(articles => {
        const articlesQteTemp = {};
        articles.map(
          article => (articlesQteTemp[article.id] = article.quantity)
        );
        this.setState({ articlesQuantity : articlesQteTemp });
      });
  }

  updateQuantity(quantity, id) {
    const articlesQty = this.state.articlesQuantity;
    articlesQty[id] = quantity;
    this.setState({ articlesQuantity : articlesQty });
  }

  handleSubmit() {
    console.log(this.state.articles);
    this.state.articles.map(
      article => (article.quantity = this.state.articlesQuantity[article.id])
    );
    callApi({
      method : 'PUT',
      route  : 'http://localhost:5000/order',
      body   : {
        articles : this.state.articles,
      },
    }).then(result => console.log(result));
  }

  render() {
    const { articles } = this.state;

    function addArticlesPrices(articlesList) {
      const reducer = (sum, article) => article.price * article.quantity + sum;
      return articlesList.reduce(reducer, 0).toFixed(2);
    }

    return (
      <Container>
        <Title> Voici votre panier </Title>
        <OrderLine
          articles={articles || []}
          updateQuantity={this.updateQuantity}
        />
        <Total>
          <TotalBox totalPrice={addArticlesPrices(articles)} />
          <ValidateOrderButton path="/order" action={this.handleSubmit} />
        </Total>
      </Container>
    );
  }
}

Home.propTypes = {
  userId : PropTypes.string.isRequired,
};

export default Home;
