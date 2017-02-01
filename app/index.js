import React, {Component} from 'react';
import {render} from 'react-dom';
import Main from "./components/Main"

class App extends Component {
  render () {
    return (
        <Main>
            {this.props.childen}
        </Main>
    )
  }
}

render(<App/>, document.getElementById('app'));
