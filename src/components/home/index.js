import React from 'react';
import styled from 'styled-components';
import OrderLine from 'components/orderLine';
import TotalBox from 'components/totalBox';
import ValidateButton from 'components/validateButton';
import callApi from 'api';

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
      articles : [],
    };
  }
  componentDidMount() {
    callApi({ method : 'GET', route : 'http://localhost:5000/order/35' }).then(
      ({ articles }) => this.setState({ articles })
    );
  }
  render() {
    const { articles } = this.state;
    return (
      <Container>
        <Title> Voici votre panier </Title>
        <OrderLine articles={articles || []} />
        <Total>
          <TotalBox />
          <ValidateButton path="/order" />
        </Total>
      </Container>
    );
  }
}

export default Home;
