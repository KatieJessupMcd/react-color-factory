import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ColorList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.colors);
    return (
      <div className="ColorList">
        <h1>Welcome to Color-List</h1>
        <Link to="/colors/new">Add a color</Link>
        <ul>
          {this.props.colors.map(color => (
            <li>
              <Link to={`/colors/${color}`}>{color}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ColorList;
