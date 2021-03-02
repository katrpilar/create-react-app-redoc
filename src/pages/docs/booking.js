  // import React, { Component } from 'react';
  // // import {
  // //   BrowserRouter as Router,
  // //   Switch,
  // //   Route,
  // //   Link
  // // } from "react-router-dom";
  // import setsterLogo from '../../images/setster-logo.png';
  // import * as Semantic from 'semantic-ui-react'
  // import theme from '../../theme.js';
  
  // import '../../App.css';
  // import { RedocStandalone} from 'redoc';
import bookingOnly from '../../bookingOnly.json';
// import MenuNav from "../../components/MenuNav"
// const  { Input, Menu, Icon, Message } = Semantic


// class Booking extends Component {
//   state = { activeItem: 'booking widget' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//       // <Router>
//       <div >
//       <header className="App-header">
//           <MenuNav activeItem={activeItem} handleItemClick={this.handleItemClick}/>
//         </header>
// <RedocStandalone specUrl={bookingOnly} options={{ noAutoAuth: true, showExtensions: ["x-examples", "x-tagGroups", "x-codeSamples", "x-displayName", "x-nesting", "x-filters"], untrustedSpec: true,
//     theme: theme, hideLoading: true
//   }}  />
//         {/* <body>
//         <script src="node_modules/redoc/bundles/redoc.standalone.js"> </script> 

//         </body> */}
//         {/* <redoc spec-url={redocTest}/> */}

//         {/* <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p> */}
//       </div>
//       // </Router>
//     );
//   }
// }

// export default Booking;


import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import '../../App.css';
import setsterLogo from '../../images/setster-logo.png';
import apiOnly from '../../apiOnly.json';
import theme from '../../theme.js';
import { RedocStandalone} from 'redoc';
import NewNav from "../../components/NewNav"


const Booking = () => (
  // <NewNav currentActiveItem="booking widget">

<RedocStandalone specUrl={bookingOnly} options={{ noAutoAuth: true, showExtensions: ["x-examples", "x-tagGroups",  "x-displayName", "x-nesting", "x-filters"],
    theme: theme
  }}  />
  // </NewNav>
)

export default Booking
