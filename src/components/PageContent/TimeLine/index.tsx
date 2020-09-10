import React from 'react';
import Avatar from '../../../assets/images/avatar.png';
import Comments from '../../../assets/icons/comments.svg';
import Retweet from '../../../assets/icons/retweet.svg';
import Likes from '../../../assets/icons/like.svg';
import { Container, Nav, NavA, Tweets, Info, TweetsButtons, TweetBody } from './styles';

const TimeLine: React.FC = () => {
  return (
  <Container>
    <Nav>
      <NavA isSelected={true} href="/">Tweets</NavA>
      <NavA href="/">Tweets and Replies</NavA>
      <NavA href="/">Medias</NavA>
    </Nav>

    <Tweets>
      <li>
        <img src={Avatar} alt="Tweet Pic"/>
        <TweetBody>
          <Info> 
            <strong>Benoit Vrins <span>@Exibit</span></strong>
            <p>The daily practice proves that the understanding of the proposed goals prepares us to face atypical situations resulting from the new proposals.</p>
          </Info>
          <TweetsButtons>
            <a href="/"><img src={Comments} alt="Comments"/> 3</a>
            <a href="/"><img src={Retweet} alt="Retweets"/> 4</a>
            <a href="/"><img src={Likes} alt="Likes"/> 28</a>
          </TweetsButtons>
        </TweetBody>
      </li>
      <li>
        <img src={Avatar} alt="Tweet Pic"/>
        <TweetBody>
          <Info> 
            <strong>Benoit Vrins <span>@Exibit</span></strong>
            <p>The daily practice proves that the understanding of the proposed goals prepares us to face atypical situations resulting from the new proposals.</p>
          </Info>
          <TweetsButtons>
            <a href="/"><img src={Comments} alt="Comments"/> 3</a>
            <a href="/"><img src={Retweet} alt="Retweets"/> 4</a>
            <a href="/"><img src={Likes} alt="Likes"/> 28</a>
          </TweetsButtons>
        </TweetBody>
      </li>      
      <li>
        <img src={Avatar} alt="Tweet Pic"/>
        <TweetBody>
          <Info> 
            <strong>Benoit Vrins <span>@Exibit</span></strong>
            <p>The daily practice proves that the understanding of the proposed goals prepares us to face atypical situations resulting from the new proposals.</p>
          </Info>
          <TweetsButtons>
            <a href="/"><img src={Comments} alt="Comments"/> 3</a>
            <a href="/"><img src={Retweet} alt="Retweets"/> 4</a>
            <a href="/"><img src={Likes} alt="Likes"/> 28</a>
          </TweetsButtons>
        </TweetBody>
      </li>      
      <li>
        <img src={Avatar} alt="Tweet Pic"/>
        <TweetBody>
          <Info> 
            <strong>Benoit Vrins <span>@Exibit</span></strong>
            <p>The daily practice proves that the understanding of the proposed goals prepares us to face atypical situations resulting from the new proposals.</p>
          </Info>
          <TweetsButtons>
            <a href="/"><img src={Comments} alt="Comments"/> 3</a>
            <a href="/"><img src={Retweet} alt="Retweets"/> 4</a>
            <a href="/"><img src={Likes} alt="Likes"/> 28</a>
          </TweetsButtons>
        </TweetBody>
      </li>      
      <li>
        <img src={Avatar} alt="Tweet Pic"/>
        <TweetBody>
          <Info> 
            <strong>Benoit Vrins <span>@Exibit</span></strong>
            <p>The daily practice proves that the understanding of the proposed goals prepares us to face atypical situations resulting from the new proposals.</p>
          </Info>
          <TweetsButtons>
            <a href="/"><img src={Comments} alt="Comments"/> 3</a>
            <a href="/"><img src={Retweet} alt="Retweets"/> 4</a>
            <a href="/"><img src={Likes} alt="Likes"/> 28</a>
          </TweetsButtons>
        </TweetBody>
      </li>      
      <li>
        <img src={Avatar} alt="Tweet Pic"/>
        <TweetBody>
          <Info> 
            <strong>Benoit Vrins <span>@Exibit</span></strong>
            <p>The daily practice proves that the understanding of the proposed goals prepares us to face atypical situations resulting from the new proposals.</p>
          </Info>
          <TweetsButtons>
            <a href="/"><img src={Comments} alt="Comments"/> 3</a>
            <a href="/"><img src={Retweet} alt="Retweets"/> 4</a>
            <a href="/"><img src={Likes} alt="Likes"/> 28</a>
          </TweetsButtons>
        </TweetBody>
      </li>            
    </Tweets>
  </Container>
  );
}

export default TimeLine;