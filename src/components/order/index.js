import React from 'react';
import styled from 'styled-components';
import TotalBox from 'components/totalBox';
import CreditCardBox from 'components/creditCardBox';
import BillBox from 'components/billBox';
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

const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles : [],
    };
  }
  componentDidMount() {
    const { userId } = this.props;
    callApi({
      method : 'GET',
      route  : `http://localhost:5000/order/${userId}`,
    }).then(({ articles }) => this.setState({ articles }));
  }
  render() {
    const { articles } = this.state;
    return (
      <Container>
        <Title> Votre commande </Title>
        <Content>
          <BillBox articles={articles} />
          <CreditCardBox userId={this.props.userId} />
        </Content>
        <Total>
          <TotalBox />
        </Total>
      </Container>
    );
  }
}

Order.propTypes = {
  userId : PropTypes.string.isRequired,
};

export default Order;
