import React, {useState} from 'react';
import setsterLogo from '../images/setster-logo.png';
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
import { createMedia } from '@artsy/fresnel'
import '../App.css';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})


  const DesktopContainer = ({currentActiveItem, children, homepage})=>{
    // state = {}
    const [fixed, setFixed] = useState(false);
    const hideFixedMenu = () => {return setFixed(false)};
    const showFixedMenu = () => {return setFixed(true)};
    const [activeItem, setActiveItem] = useState(currentActiveItem);
    const handleItemClick = (name) => setActiveItem(name);
      return (
        <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={showFixedMenu}
          onBottomPassedReverse={hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ padding: '1em 0em'}}
            vertical
            className="App-header"
          >
            <Menu
              fixed={fixed ? 'top' : null}
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
                <Menu.Item 
                name='Docs'
                active={activeItem === 'Docs'}
                onClick={handleItemClick}
                href="/docs/api"
                >Documentation</Menu.Item>
                <Menu.Item 
                name='booking widget'
                active={activeItem === 'booking widget'}
                onClick={handleItemClick}
                href="/docs/booking"
                >Booking Widget</Menu.Item>
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
            {homepage}
          </Segment>
        </Visibility>
        {children}
      </Media>
      )
    
  }
  
  
  const MobileContainer = ({currentActiveItem, children, homepage}) => {
    const [sidebarOpened, setSidebarOpened] = useState(false);
   const handleSidebarHide = () => setSidebarOpened(false)    
    const handleToggle = () => setSidebarOpened(true)
    const [activeItem, setActiveItem] = useState(currentActiveItem);
    const handleItemClick = (name) => setActiveItem(name);
      return (
        <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active href="/">
              Home
            </Menu.Item>
            <Menu.Item as='a' href="/docs/api">Documentation</Menu.Item>
                <Menu.Item as='a' href="/docs/booking">Booking Widget</Menu.Item>
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
              style={{ padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={handleToggle}>
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
              {homepage}
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
      )
    
  }
  


const NewNav = ({currentActiveItem, children}) => {
  
  // function handleItemClick(name){
  //   return setActiveItem(name)
  // }
  // const handleItemClick = (e, { name }) => setActiveItem(name)
  // const ResponsiveContainer = ({ children }) => (
  //   /* Heads up!
  //    * For large applications it may not be best option to put all page into these containers at
  //    * they will be rendered twice for SSR.
  //    */
  //   <MediaContextProvider>
  //     <DesktopContainer>{children}</DesktopContainer>
  //     <MobileContainer>{children}</MobileContainer>
  //   </MediaContextProvider>
  // )

 return (
 <>
 <MediaContextProvider>
      <DesktopContainer currentActiveItem={currentActiveItem} children={children}/>
      <MobileContainer currentActiveItem={currentActiveItem} children={children}/>
    </MediaContextProvider>
 </>     
 )
}

export default NewNav;