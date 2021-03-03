import React from 'react'
import '../App.css';
import apiOnly from '../apiOnly.json';
import theme from '../theme.js';
import { RedocStandalone} from 'redoc';
import 'semantic-ui-css/semantic.min.css';

const ApiRedoc = () => {
  return(
    // <NewNav currentActiveItem="Docs">
    // <NewNav activeItem="Docs">
  <RedocStandalone specUrl={apiOnly} options={{ noAutoAuth: true, showExtensions: ["x-examples", "x-tagGroups",  "x-displayName", "x-nesting", "x-filters"],
    theme: theme
  }}  lazy-rendering/>
  // </NewNav>
  // <NewNav currentActiveItem="Docs">
  // </NewNav>

)}

export default ApiRedoc;