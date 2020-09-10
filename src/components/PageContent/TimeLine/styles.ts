import styled, {css} from 'styled-components';

interface INavA{
  isSelected?: boolean;
}

export const Container = styled.section`
  flex:1;
  background: #FFF;
  margin: 10px 5px 0 5px;
`;

export const Nav = styled.nav`
  border-bottom: 1px solid #e6ecf0;
  padding: 10px 15px;
`;

export const NavA = styled.a<INavA>`
  font-size: 18px;
  text-decoration: none;
  color: #3BB9E3;
  font-weight: bold;
  & + a{
    margin-left: 20px;
  }
  ${props => props.isSelected && css`
    color: #000;
  `}
`;


export const Tweets = styled.ul`
  list-style:none;
  li{
    border-bottom: 1px solid #e6ecf0; 
    padding: 10px 15px; 
    display:flex;
    > img{
      height: 48px;
      width: 48px;
      border-radius: 50%;
    }
  }
`;

export const Info = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  strong{
    font-size: 14px;
    color: #000;
    span{
      font-size: 13px;
      font-weight: normal;
      color: #7B8B9A;
    }
  }
  p{
    font-size: 14px;
    color: #1F2326; 
    margin-top: 8px;
  }
`;

export const TweetsButtons = styled.div`
  display:flex;
  align-items:center;
  margin-top: 15px;
  a{
    display: flex;
    align-items: center;
    text-decoration:none;
    margin-right: 10px;
    color: #667580;
    font-weight:bold;
    font-size:12px;
    margin-right: 20px;
    img{
      margin-right: 5px;
    }
  }
`;

export const TweetBody = styled.div`
  display:flex;
  flex-direction:column;
`;