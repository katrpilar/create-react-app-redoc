import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import redoc from 'redoc'
import { RedocStandalone} from 'redoc';
// import { RedocStandalone} from 'redoc/';
// var setsterYaml = require('./OpenAPI_Specification (1).yaml');
// https://www.setster.com/api/docs/OpenAPI_Specification.yaml
import setsterYaml from './OpenAPI_Specification (1).yaml';
// import setsterJSON from './tiles.json';
// let SchemaDefinition = RedocStandalone.SchemaDefinition;
import redocTest from './redocTest.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        <RedocStandalone specUrl={redocTest} />
        {/* <body>
        <script src="node_modules/redoc/bundles/redoc.standalone.js"> </script> 

        </body> */}
        {/* <redoc spec-url={redocTest}/> */}

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
