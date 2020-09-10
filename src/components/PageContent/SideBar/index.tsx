import React from 'react';

import Avatar from '../../../assets/images/avatar.png';
import Place from '../../../assets/icons/place.svg';
import Url from '../../../assets/icons/url.svg';
import Joined from '../../../assets/icons/joined.svg';
import Born from '../../../assets/icons/born.svg';
import Followers from '../../../assets/icons/followers.svg';
import Images from '../../../assets/icons/images.svg';
import { Container, AvatarImg, Ul, Widget, ImagesContainer } from './styles';

const SideBar: React.FC = () => {
  return (
  <Container>
      <AvatarImg src={Avatar} alt="Profile Pic"/>
      <h1>Samuel Formigheri</h1>
      <span>@Samformigheri</span>
      <p>Web, Design & Rock 'n Roll</p>

      <Ul>
        <li>
          <img src={Place} alt=""/>
          Caxias do Sul, Brasil
        </li>
        <li>
          <img src={Url} alt=""/>
          exibit.me
        </li>
        <li>
          <img src={Joined} alt=""/>
          Joined June 2007
        </li>
        <li>
          <img src={Born} alt=""/>
          Born at 06th of March of 1997
        </li>
      </Ul>

      <Widget>
        <strong><img src={Followers} alt="Followers"/> 73 followers that you know</strong>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Widget>

      <ImagesContainer>
        <strong><img src={Images} alt="Images"/> 266 photos and videos</strong>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </ImagesContainer>
  </Container>
  );
}

export default SideBar;