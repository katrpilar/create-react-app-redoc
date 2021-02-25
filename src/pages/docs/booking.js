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


const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
          style={{height: '90px'}}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ padding: '1em 0em',   background: 'linear-gradient( -63.43000000000001deg, #d0021b 15%, #9d0214 85%)' }}
            vertical
            className="App-header"
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              style={{border: 'none'}}
            >
              <Menu.Item style={{width: '8.5em'}}
        href="/"
        style={{marginLeft: '2.75em'}}
        >
          <img src={setsterLogo} alt="logo" style={{width: '100px'}} />       

        </Menu.Item>   
              <Container className="menu-container">
                <Menu.Item as='a' href="/docs/api" >Documentation</Menu.Item>
                <Menu.Item as='a' href="/docs/booking" active>Booking Widget</Menu.Item>
                <Menu.Item as='a' href="https://www.setster.com/scheduling-features">
                  Features
                </Menu.Item>
                <Menu.Item
                  color='#fffff'
                  href="https://support.setster.com/hc/en-us"
                  style={{padding: '.5em 1.14285714em'}}
                >
                  <Icon className="setster-icon" size="large" style={{height: '1.1em', width:'1.1em'}}/>
                  Support
                  </Menu.Item>                
                <Menu.Item position='right'>
                  {/* <Button as='a' inverted={!fixed}>
                    Log in
                  </Button> */}
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em',  backgroundColor: 'rgba(255,255,255,0.1)', boxShadow: 'none !important' }} className="sign-up" href="https://www.setster.com/login">
                    Log In
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em',  backgroundColor: 'rgba(255,255,255,0.1)', boxShadow: 'none !important' }} className="sign-up" href="https://www.setster.com/onboarding/personal">
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            {/* <HomepageHeading /> */}
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' href="/">
              Home
            </Menu.Item>
            <Menu.Item as='a' href="/docs/api" >Documentation</Menu.Item>
                <Menu.Item as='a' href="/docs/booking" active>Booking Widget</Menu.Item>
                <Menu.Item as='a' href="https://www.setster.com/scheduling-features">
                  Features
                </Menu.Item>
            <Menu.Item as='a' href="https://support.setster.com/hc/en-us">Support</Menu.Item>
            <Menu.Item as='a' href="https://www.setster.com/login">Log in</Menu.Item>
            <Menu.Item as='a' href="https://www.setster.com/onboarding/personal">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    {/* <Button as='a' inverted>
                      Log in
                    </Button> */}
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Booking = () => (
  <ResponsiveContainer style={{backgroundColor: '#fff'}}>
<RedocStandalone specUrl={bookingOnly} options={{ noAutoAuth: true, showExtensions: ["x-examples", "x-tagGroups",  "x-displayName", "x-nesting", "x-filters"],hideLoading: true,
    theme: theme
  }}  />
  </ResponsiveContainer>
)

export default Booking
