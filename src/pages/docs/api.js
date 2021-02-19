import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import logo from './logo.svg';
import setsterLogo from '../../images/setster-logo.png';
// import { Input, Menu, Icon, Message } from 'semantic-ui-react'
import * as Semantic from 'semantic-ui-react'
// const Input = Semantic.Input;
// const Menu = Semantic.Menu;
// const Icon = Semantic.Icon;
import theme from '../../theme.js';
// import {importMDX} from 'mdx.macro'
// const Content = lazy(() => importMDX('../public/general/getting-started.mdx'))

import '../../App.css';
// import redoc from 'redoc'
import { RedocStandalone} from 'redoc';
// import { RedocStandalone} from 'redoc/';
// var setsterYaml = require('./OpenAPI_Specification (1).yaml');
// https://www.setster.com/api/docs/OpenAPI_Specification.yaml
// import setsterYaml from './OpenAPI_Specification (1).yaml';
// import setsterJSON from './tiles.json';
// let SchemaDefinition = RedocStandalone.SchemaDefinition;
// import redocTest from './redocTest.json';
import apiOnly from '../../apiOnly.json';
// import developerPortal from '../developerPortal.json';
const  { Input, Menu, Icon, Message } = Semantic


class App extends Component {
  state = { activeItem: 'Docs' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Router>
      <div >
        <header className="App-header">
          {/* <img src={setsterLogo} className="setster-logo" alt="logo" /> */}
          {/* <h1 className="App-title">Setster Developer Portal</h1> */}
          {/* <h4 className="App-title">API Reference</h4>    */}
          <Menu secondary inverted>
        <Menu.Item style={{width: '8.5em'}}
        href="https://setster.com/"
        >
          <img src={setsterLogo} alt="logo" style={{width: '100px'}} />
        </Menu.Item>
        {/* <Menu.Item
          name='home'
          active={activeItem === 'home'}
          href="https://setster.com/"
        /> */}
        
        <Menu.Menu position='right'>
        <Menu.Item
          color='#fffff'
          name='Docs'
          active={activeItem === 'Docs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          color='#fffff'
          name='booking widget'
          active={activeItem === 'booking widget'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          color='#fffff'
          name='support'
          active={activeItem === 'support'}
          href="https://support.setster.com/hc/en-us"
        >
        <Icon className="setster-icon" size="large" style={{height: '1.1em', width:'1.1em'}}/>
        Support
        </Menu.Item>
        {/* <Menu.Item>
          <Input icon='search' placeholder='Search...' backgroundColor='rgba(255,255,255,0.1)'/>
        </Menu.Item> */}
      </Menu.Menu> 
        
      
      </Menu>
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

        {/* <h1>This workes</h1> */}
        <RedocStandalone specUrl={apiOnly} options={{ noAutoAuth: true, showExtensions: ["x-examples", "x-tagGroups", "x-codeSamples", "x-displayName", "x-nesting", "x-filters"],
    theme: theme, allowedMdComponents: {"Message": {component: Message, props: {color: 'red'}, propsSelector: function (store) { return ({store: store}); }}}
  }} />
  {/* <RedocStandalone specUrl={apiOnly} options={{ noAutoAuth: true, showExtensions: ["x-examples", "x-tagGroups", "x-codeSamples", "x-displayName", "x-nesting", "x-filters"],
    theme: theme, allowedMdComponents:  {"Semantic": {component: Semantic, propsSelector: function (store) { return ({store: store}); }}}
  }} /> */}

{/* <Message color='red'>Red</Message> */}

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
