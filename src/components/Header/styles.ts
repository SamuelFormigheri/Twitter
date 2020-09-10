import styled from 'styled-components';
import {shade} from 'polished';

import SearchImg from '../../assets/icons/search.svg';

export const Container = styled.header`
  height:46px;
  background-color: #FFF;
  box-shadow: 0 1px 3px rgba(0,0,0,0.25);
  position: relative;
  z-index:1;
`;

export const Content = styled.div`
  max-width:1100px;
  margin: 0 auto;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  @media(max-width: 1100px){
    padding: 0 10px;
  }
`;

export const Nav = styled.nav`
display:flex;
  ul{
    display:flex;
    list-style:none;
  }
  li{
    display:flex;
    align-items:center;
    font-size: 13px;
    color: #667580;
    font-weight: bold;
    cursor: pointer;
    transition: 280ms;
    &:hover{
      color: ${shade(0.5,"#667580")};
    }
    img{
      margin-right: 7px;
      cursor: pointer;
    }
    & + li{
      margin-left: 30px;
    }
    @media(max-width: 700px){
      span{
        display:none;
      }
    }
    @media(max-width: 530px){
      img{
        margin-right: 2px;
        cursor: pointer;
      }
      & + li{
        margin-left: 10px;
      }
    }
  }
`;

export const Side = styled.div`
  display: flex;
  img{
    height: 34px;
    width: 35px;
    border-radius: 50%;
    margin: 0 15px;

    @media(max-width: 380px){
      margin: 0 5px;
    }

  }
  button{
    background: #3BB9E3;
    color: #FFF;
    border-radius: 16px;
    height: 34px;
    width: 90px;
    font-size: 14px;
    font-weight: bold;
    display:flex;
    align-items:center;
    justify-content: center;
    transition: 200ms;
    &:hover{
        background: ${shade(0.2,"#3BB9E3")};
    }
    @media(max-width: 350px){
      width: 60px;
    }
  }
  input{
    background: #F5F8FA;
    border: 1px solid #E6ECF0;
    width: 200px;
    padding: 0 30px 0 12px;
    border-radius: 16px;
    color: #667580;
    font-size: 12px;
    background: #f5f8fa url(${SearchImg}) 175px no-repeat;

    @media(max-width: 530px){
      width: 100px;
    }

  }
`;
