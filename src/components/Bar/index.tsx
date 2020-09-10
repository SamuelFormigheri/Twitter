import React from 'react';

import More from '../../assets/icons/more.svg';

import { Container, Content, Ul, Li, Actions } from './styles';

const Bar: React.FC = () => {
  return (
      <Container>
          <Content>
            <Ul>
                <Li isSelected={true}>
                    <span>Tweets</span>
                    <strong>223</strong>
                </Li>
                <Li>
                    <span>Followings</span>
                    <strong>100</strong>
                </Li>
                <Li>
                    <span>Followers</span>
                    <strong>578</strong>
                </Li>
                <Li>
                    <span>Favorites</span>
                    <strong>262</strong>
                </Li>
                <Li>
                    <span>Lists</span>
                    <strong>8</strong>
                </Li>
                <Li>
                    <span>Moments</span>
                    <strong>0</strong>
                </Li>
            </Ul>
            <Actions>
                <button>Follow</button>
                <img src={More} alt="More"/>
            </Actions>
          </Content>
      </Container>
  );
}

export default Bar;