import React from 'react';

import Logo from '../../assets/icons/logo.svg';
import Home from '../../assets/icons/home.svg';
import Notifications from '../../assets/icons/notification.svg';
import Messages from '../../assets/icons/message.svg';
import Avatar from '../../assets/images/avatar.png';
import { Container, Content, Nav, Side } from './styles';

const Header: React.FC = () => {
  return (
      <Container>
          <Content>
            <Nav>
                <ul>
                    <li><img src={Home} alt="Home"/> <span>Home</span></li>
                    <li><img src={Notifications} alt="Notifications"/> <span>Notifications</span></li>
                    <li><img src={Messages} alt="Messages"/> <span>Messages</span></li>
                </ul>
            </Nav>
            <img src={Logo} alt="Twitter Logo"/>
            <Side>
                <input type="text" placeholder="Search on Twitter"/>
                <img src={Avatar} alt="Avatar Profile Pic"/>
                <button>Tweet</button>
            </Side>
          </Content>
      </Container>
  );
}

export default Header;