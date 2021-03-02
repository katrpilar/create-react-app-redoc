import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import logo from './logo.svg';
import setsterLogo from './setster-logo.png';

import theme from '../src/theme.js';
import {importMDX} from 'mdx.macro'
// const Content = lazy(() => importMDX('../public/general/getting-started.mdx'))

import './App.css';
// import redoc from 'redoc'
import { RedocStandalone} from 'redoc';
// import { RedocStandalone} from 'redoc/';
// var setsterYaml = require('./OpenAPI_Specification (1).yaml');
// https://www.setster.com/api/docs/OpenAPI_Specification.yaml
import setsterYaml from './OpenAPI_Specification (1).yaml';
// import setsterJSON from './tiles.json';
// let SchemaDefinition = RedocStandalone.SchemaDefinition;
// import redocTest from './redocTest.json';
import apiOnly from '../src/apiOnly.json';
// import developerPortal from './developerPortal.json';

import NewNav from "../src/components/NewNav"

class App extends Component {
  render() {
    return (
      <NewNav currentActiveItem="home"/>
    );
  }
}

export default App;
