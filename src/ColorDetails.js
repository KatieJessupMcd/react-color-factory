import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ColorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let ourColor = this.props.match.params.color;
    return (
      <div
        className="ColorDetails"
        style={{ backgroundColor: ourColor, height: '100vh' }}
      >
        <p
          style={{
            height: '50%',
            color: 'white',
            fontSize: '40px'
          }}
        >
          This is the color {ourColor}.
        </p>{' '}
        <p style={{ height: '50%', color: 'white', fontSize: '40px' }}>
          It's so super.
        </p>
        <Link to="/colors">Go Back</Link>
      </div>
    );
  }
}

export default ColorDetails;
