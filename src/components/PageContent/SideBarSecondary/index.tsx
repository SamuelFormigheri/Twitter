import React from 'react';

import Avatar from '../../../assets/images/avatar.png';

import { Container, Follow, Trends, Title, Profile } from './styles';

const SideBarSecondary: React.FC = () => {
  return (
  <Container>
    <Follow>
      <Title>
        <strong>Who to Follow</strong>
        <a href="/">Refresh</a>
        <a href="/">View All</a>
      </Title>
      <ul>
        <li>
          <Profile>
            <img src={Avatar} alt="Pic"/>
            <div>
              <strong>Spade</strong>
              <span>@spade_be</span>
              <button>Follow</button>
            </div>
          </Profile>
          <a href="/">x</a>
        </li>

        <li>
          <Profile>
            <img src={Avatar} alt="Pic"/>
            <div>
              <strong>Spade</strong>
              <span>@spade_be</span>
              <button>Follow</button>
            </div>
          </Profile>
          <a href="/">x</a>
        </li>

        <li>
          <Profile>
            <img src={Avatar} alt="Pic"/>
            <div>
              <strong>Spade</strong>
              <span>@spade_be</span>
              <button>Follow</button>
            </div>
          </Profile>
          <a href="/">x</a>
        </li>
      </ul>
    </Follow>
    <Trends>
      <Title>
          <strong>Trends</strong>
          <a href="/">Change</a>
      </Title>
      <ul>
        <li>
          #sportingday
        </li>
        <li>
          #womenleaders
        </li>
        <li>
          #uxdesign
        </li>
        <li>
          #uidesign
        </li>
      </ul>
    </Trends>
    </Container>);
}

export default SideBarSecondary;