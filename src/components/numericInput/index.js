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
    this.props.updateQuantity(this.state.inputValue, this.props.id);
  }
}

NumericInput.propTypes = {
  value          : PropTypes.string,
  updateQuantity : PropTypes.func,
  id             : PropTypes.number,
};

export default NumericInput;
