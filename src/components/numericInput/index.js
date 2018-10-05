import React from 'react';
import PropTypes from 'prop-types';

class NumericInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue : props.value,
    };
  }

  render() {
    return (
      <div>
        <input
          type="number"
          value={
            this.state.inputValue !== ''
              ? this.state.inputValue
              : this.setState({ inputValue : 0 })
          }
          onChange={this.updateInputValue.bind(this)}
          onKeyPress={event => {
            event.preventDefault();
          }}
          min="0"
        />
      </div>
    );
  }

  updateInputValue(event) {
    this.setState({
      inputValue : event.target.value,
    });
    // + 1 because state is not up to date when we execute updateQuantity
    this.props.updateQuantity(this.state.inputValue + 1, this.props.id);
  }
}

NumericInput.propTypes = {
  value          : PropTypes.number,
  updateQuantity : PropTypes.func,
  id             : PropTypes.string,
};

export default NumericInput;
