import React, { Component } from 'react';
import setsterLogo from '../images/setster-logo.png';
import * as Semantic from 'semantic-ui-react'

import '../App.css';
const  { Input, Menu, Icon, Message } = Semantic

const MenuNav = ({activeItem, handleItemClick}) => {

 return (
 <Menu secondary inverted>
        <Menu.Item style={{width: '8.5em'}}
        href="https://setster.com/"
        >
          <img src={setsterLogo} alt="logo" style={{width: '100px'}} />
        </Menu.Item>        
        <Menu.Menu position='right'>
        <Menu.Item
          color='#fffff'
          name='Docs'
          active={activeItem === 'Docs'}
          onClick={handleItemClick}
          href="/docs/api"
        />
        <Menu.Item
          color='#fffff'
          name='booking widget'
          active={activeItem === 'booking widget'}
          onClick={handleItemClick}
          href="/docs/booking"
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
      </Menu.Menu> 
      </Menu>
      )
}

export default MenuNav;