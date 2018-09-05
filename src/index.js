import React from 'react';
import { render } from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <p>Hello world !</p>
      </div>
    );
  }
}

render(<Hello />, document.getElementById('root'));
