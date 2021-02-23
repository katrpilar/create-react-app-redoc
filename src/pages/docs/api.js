import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import setsterLogo from '../../images/setster-logo.png';
import * as Semantic from 'semantic-ui-react'
import theme from '../../theme.js';
import '../../App.css';
import { RedocStandalone} from 'redoc';
import apiOnly from '../../apiOnly.json';
import MenuNav from "../../components/MenuNav"

// import developerPortal from '../developerPortal.json';
const  { Input, Menu, Icon, Message } = Semantic


class Api extends Component {
  state = { activeItem: 'Docs' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Router>
      <div >
        <header className="App-header">
<MenuNav activeItem={activeItem} handleItemClick={this.handleItemClick}/>
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
        {/* <RedocStandalone specUrl={apiOnly} options={{ noAutoAuth: true, showExtensions: ["x-examples", "x-tagGroups", "x-codeSamples", "x-displayName", "x-nesting", "x-filters"],
    theme: theme, allowedMdComponents: {"Message": {component: Message, props: {color: 'red'}, propsSelector: function (store) { return ({store: store}); }}}
  }} /> */}
{/* <RedocStandalone specUrl={apiOnly} options={{ noAutoAuth: true, showExtensions: ["x-examples", "x-tagGroups", "x-codeSamples", "x-displayName", "x-nesting", "x-filters"],
    theme: theme
  }} /> */}
<RedocStandalone specUrl={apiOnly} options={{ noAutoAuth: true, showExtensions: ["x-examples", "x-tagGroups", "x-codeSamples", "x-displayName", "x-nesting", "x-filters"],
    theme: theme
  }}  />


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

export default Api;
