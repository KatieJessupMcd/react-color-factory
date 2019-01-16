import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import ColorForm from './ColorForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { colors: ['red', 'blue', 'green'] };
    this.addColor = this.addColor.bind(this);
  }

  addColor(color) {
    let allColors = [...this.state.colors];
    console.log('ALL COLORS', allColors);
    this.setState(
      { colors: [...allColors, color] },
      console.log('THIS.STATE', this.state)
    );
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/colors"
            render={() => <ColorList colors={this.state.colors} />}
          />
          <Route
            exact
            path="/colors/new"
            render={routeProps => (
              <ColorForm {...routeProps} addColor={this.addColor} />
            )}
          />
          <Route
            exact
            path="/colors/:color"
            render={routeProps => {
              if (
                this.state.colors.some(x => x === routeProps.match.params.color)
              ) {
                return <ColorDetails {...routeProps} />;
              }
              return <Redirect to="/colors" />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
