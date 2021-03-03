/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

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
import '../App.css';
import setsterLogo from '../images/setster-logo.png';
import ipadImg from '../images/iPad-Opacity-1.svg'
import laptopImg from '../images/enterprise-online-appointment-scheduling.png'

import simpleWidgetImg from '../images/access-server.svg'
import widgetImg from '../images/Int-dots-Icon.svg'
import apiImg from '../images/OverlappingLayers.svg'
import 'semantic-ui-css/semantic.min.css';
import NewNav from "../components/NewNav"

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
  <Container text textAlign="center">
    <Header
      as='h1'
      content='Setster Developer Portal'
      style={{
        fontSize: mobile ? '2em' : '2.7em',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '4.3em',
      }}
    />
    <Header
      as='h2'
      content='Everything you need to Start Booking Appointments Today'
      style={{
        fontSize: mobile ? '1.3em' : '1.4em',
        marginTop: mobile ? '0.5em' : '1.5em',
        marginBottom: '3.4em'
      }}
    />
    <Button size='huge' href="/docs/api" className="get-started" >
      Get Started
      <Icon name='right arrow' />
    </Button>
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
        >
          <Segment
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em'}}
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
                <Menu.Item as='a' href="/docs/api">Documentation</Menu.Item>
                <Menu.Item as='a' href="/docs/booking">Booking Widget</Menu.Item>
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
            <HomepageHeading />
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

const MobileHeading = <HomepageHeading mobile />

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    {/* <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer> */}
    <HomepageHeading />
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  // <ResponsiveContainer>
<>
<NewNav activeItem="Home">

<HomepageHeading/>
<Segment vertical >
    <Header
      as='h3'
      content='Setster Appointment Scheduling Framework'
      textAlign='center'
      color="#020a1b"
      style={{ fontSize: '2em', marginTop:'3em', marginBottom: '2em' }}
    />
    <Grid columns={3} container doubling stackable textAlign='center' style={{marginBottom:'3em'}}>
      <Grid.Column>
        <Segment 
       className='cards-grid'
        >
        <Image rounded size='tiny' src={apiImg} centered style={{height: '60px', width: 'auto', marginTop: '3.4em'}}/>
        <Header as='h4' style={{ fontSize: '1.5em' }}>
        Setster API
            </Header>
            <p style={{height: '5em'}}>Setster's API supports the remote management of scheduling appointments and integrations with third party workflows designed to match your business architecture and product.</p>
            <Button size='huge' href="/docs/api" className="segment-btn" style={{marginTop: '2em', marginBottom: '3.4em',border: '#07183b 1px solid', fontSize: '16px', }}>Get Started</Button>
          </Segment>
            
      </Grid.Column>
      <Grid.Column>
        <Segment style={{}} className='cards-grid'>
        <Image rounded size='tiny' src={widgetImg} centered style={{height: '60px', width: 'auto', marginTop: '3.4em'}}/>
        <Header as='h4' style={{ fontSize: '1.5em' }}>
        Booking Widget
            </Header>     
            <p style={{height: '5em'}}>
              A powerful and highly customizeable multi-step user flow turns appointment booking into an effortlessly seamless experience that customers will love.
            </p>     
            <Button size='huge' href="/docs/booking" className="segment-btn" style={{marginTop: '2em', marginBottom: '3.4em',border: '#07183b 1px solid', fontSize: '16px', }}>Get Started</Button>
            </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment style={{}} className='cards-grid'>
        <Image rounded size='tiny' src={simpleWidgetImg} centered style={{height: '60px', width: 'auto', marginTop: '3.4em'}}/>
        <Header as='h4' style={{ fontSize: '1.5em' }}>
          Simple Widget            
        </Header>
        <p style={{height: '5em'}}>The Setster simple widget with limited customization can be placed on your website in many different ways as a quick solution to for booking. </p>
        <Button size='huge' href="https://support.setster.com/hc/en-us/sections/114093980733-Booking-Widget" className="segment-btn" style={{marginTop: '2em', marginBottom: '3.4em',border: '#07183b 1px solid', fontSize: '16px', }}>Get Started</Button>
        </Segment>
      </Grid.Column>
    </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Scheduling API Loved By Developers
            </Header>
            <p style={{ fontSize: '1.33em' }}>
             A clear path forward to solving complex scheduling problems. Our robust scheduling solutions with equally robust documentation make sense of even the most complex scheduling logic.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Feature Complete Solutions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              From defined availability, advanced notice or padding, and physical or virtual meeting locations you control every step of the booking experience.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image rounded size='large' src={laptopImg} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge' href="https://www.setster.com/scheduling-features" className="explore-btn" style={{marginTop: '3.4em',border: '#d0021b 2px solid', fontSize: '16px', }}>Explore Features</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}

    {/* <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment> */}
    </NewNav>
  </>
)

export default HomepageLayout
