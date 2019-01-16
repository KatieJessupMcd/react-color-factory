import React, { Component } from 'react';

class ColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addColor(this.state.color);
    this.props.history.push('/colors');
  }

  render() {
    return (
      <div className="ColorForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="color">color</label>
          <input
            name="color"
            id="color"
            placeholder="color"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default ColorForm;
