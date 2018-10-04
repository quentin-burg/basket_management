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
      articlesQuantity : {},
    };
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.articles !== prevProps.articles) {
      this.setState({ articles : this.props.articles });
    }
  }
  componentDidMount() {
    articles => {
      const articlesQteTemp = {};
      articles.map(article => (articlesQteTemp[article.id] = article.quantity));
      this.setState({ articlesQuantity : articlesQteTemp });
    };
  }

  updateQuantity(quantity, id) {
    const articlesQty = this.state.articlesQuantity;
    articlesQty[id] = quantity;
    this.setState({ articlesQuantity : articlesQty });
  }

  handleSubmit() {
    const articles = this.props.articles;
    articles.map(
      article =>
        this.state.articlesQuantity[article.id] !== undefined
          ? (article.quantity = this.state.articlesQuantity[article.id])
          : article.quantity
    );
    callApi({
      method : 'PUT',
      route  : '/order',
      body   : {
        articles : this.props.articles,
      },
    }).then(result => console.log(result));
  }

  render() {
    function addArticlesPrices(articlesList) {
      const reducer = (sum, article) => article.price * article.quantity + sum;
      return articlesList.reduce(reducer, 0).toFixed(2);
    }

    return (
      <Container>
        <Title> Voici votre panier </Title>
        <OrderLine
          articles={this.props.articles || []}
          updateQuantity={this.updateQuantity}
        />
        <Total>
          <TotalBox totalPrice={addArticlesPrices(this.props.articles)} />
          <ValidateOrderButton path="/order" action={this.handleSubmit} />
        </Total>
      </Container>
    );
  }
}

Home.propTypes = {
  userId   : PropTypes.string,
  articles : PropTypes.array,
};

export default Home;
