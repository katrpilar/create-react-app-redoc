import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as Semantic from 'semantic-ui-react'
import '../App.css';
import MenuNav from "../components/MenuNav"
const  { Input, Menu, Icon, Message } = Semantic


class App extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Router>
      <div >
      <header className="App-header">
        <MenuNav activeItem={activeItem} handleItemClick={this.handleItemClick}/>
      </header>
{/* <RedocStandalone specUrl={bookingOnly} options={{ noAutoAuth: true, showExtensions: ["x-examples", "x-tagGroups", "x-codeSamples", "x-displayName", "x-nesting", "x-filters"], untrustedSpec: true,
    theme: theme, allowedMdComponents: { "Operation":
      {component: "Operation",
      propsSelector: function (store) { return ({
          parser: store.spec.parser,
          options: store.options
      }) }}
  }
  }}  /> */}
      </div>
      </Router>
    );
  }
}

export default App;
