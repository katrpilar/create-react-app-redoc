import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import logo from './logo.svg';
import setsterLogo from '../images/setster-logo.png';

import theme from '../theme.js';
import {importMDX} from 'mdx.macro'
// const Content = lazy(() => importMDX('../public/general/getting-started.mdx'))

import '../App.css';
// import redoc from 'redoc'
import { RedocStandalone} from 'redoc';
// import { RedocStandalone} from 'redoc/';
// var setsterYaml = require('./OpenAPI_Specification (1).yaml');
// https://www.setster.com/api/docs/OpenAPI_Specification.yaml
// import setsterYaml from './OpenAPI_Specification (1).yaml';
// import setsterJSON from './tiles.json';
// let SchemaDefinition = RedocStandalone.SchemaDefinition;
import redocTest from '../redocTest.json';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={setsterLogo} className="setster-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <JsonSchema
          schema={{
            type: 'object',
            description: 'A representation of a cat',
            properties: {
              huntingSkill: {
                type: 'string',
                description: 'The measured skill for hunting',
                default: 'lazy',
                example: 'adventurous',
                enum: ['clueless', 'lazy', 'adventurous', 'aggressive'],
              },
            },
            required: ['huntingSkill'],
          }}
        /> */}
        {/* <JsonViewer /> */}
        <RedocStandalone specUrl={redocTest} options={{ noAutoAuth: true, showExtensions: ["x-examples", "x-tagGroups", "x-codeSamples", "x-displayName", "x-nesting", "x-filters"],
    theme: theme
  }} />
        {/* <body>
        <script src="node_modules/redoc/bundles/redoc.standalone.js"> </script> 

        </body> */}
        {/* <redoc spec-url={redocTest}/> */}

        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
      </Router>
    );
  }
}

export default App;
