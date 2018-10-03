import React from 'react';
import styled from 'styled-components';
import ValidateOrderButton from 'components/validateOrderButton';
import callApi from 'api';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

class CreditCardBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const { userId } = this.props;
    callApi({
      method : 'POST',
      route  : '/bill',
      body   : { userId },
    }).then(({ bill }) => console.log(bill));
  }
  render() {
    return (
      <Container>
        <label>
          Numéro de la carte:
          <input type="text" name="number" />
        </label>
        <label>
          Date d expiration:
          <input type="text" name="exp_date" />
        </label>
        <label>
          Cryptogramme:
          <input type="text" name="crypto" />
        </label>
        <ValidateOrderButton path="/bill" action={this.handleSubmit} />
      </Container>
    );
  }
}

CreditCardBox.propTypes = {
  userId : PropTypes.string.isRequired,
};

export default CreditCardBox;
