import React from 'react';
import styled from 'styled-components';
import ValidateOrderButton from 'components/validateOrderButton';

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
    // console.log('couoc', this.inputNumber);
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

export default CreditCardBox;
