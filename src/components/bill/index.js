import React from 'react';
import styled from 'styled-components';
import BillBox from 'components/billBox';
import PropTypes from 'prop-types';

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

const Bill = ({ articles }) => (
  <Container>
    <Title>Votre facture</Title>
    <Content>
      <BillBox articles={articles || []} />
      <Message>
        <div>Merci d avoir commandé!</div>
        <div>Votre numéro de facture est le: xxxxxx</div>
      </Message>
    </Content>
  </Container>
);

Bill.propTypes = {
  articles : PropTypes.array,
};

// export default withFetch(Bill, {
//   method : 'GET',
//   route  : 'http://localhost:5000/order/35',
// });

export default Bill;
