import styled from 'styled-components';
import {shade} from 'polished';
export const Container = styled.aside`
  width:290px;
  margin-top: 10px;

  @media(max-width: 950px){
    display: none;
  }
`;

export const Follow = styled.div`
  background: #FFF;
  padding: 15px;
  ul{
      list-style:none;
      margin-top: 10px;
      li{
          display: flex;
          justify-content: space-between;

          border-bottom: 1px solid #ccd6dd;
          padding-bottom: 10px;
          margin-bottom: 10px;
          a{
             text-decoration: none;
             color: #ccd6dd;
             font-size: 14px; 
          }
      }
  }
`;

export const Trends = styled.div`
  background: #FFF;
  padding: 15px;
  margin-top: 20px;
  ul{
      list-style:none;
      margin-top: 20px;
      li{
          display: flex;
          justify-content: space-between;

          border-bottom: 1px solid #ccd6dd;
          padding-bottom: 10px;
          margin-bottom: 10px;
          color: #3BB9E3;
          font-size: 14px;
          cursor: pointer;
      }
  }  
`;

export const Title = styled.div`
  display:flex;
  align-items: baseline;
  justify-content:space-between;
  strong{
      font-size: 18px;
      color: #1f2226;
  }
  a{
    font-size: 12px;
    color: #3BB9E3; 
    text-decoration: none; 
    position:relative;
    padding-left: 10px;
    &::before{
        content: "";
        width: 2px;
        height: 2px;
        border-radius: 50%;
        margin-left: 5px;
        margin-right: 5px;
        background: #000;
        position: absolute;
        left: 0;
        top: 6px;
    }  
  }
`;

export const Profile = styled.div`
    display:flex;
    align-items:center;
  img{
      width: 48px;
      height: 48px;
      border-radius: 50%;
  }
  div{
      margin-left: 10px;
      display:flex;
      flex-direction:column;
      strong{
        font-size: 14px;
        color: #1f2326;
      }
      span{
        font-weight: normal;
        color: #9a9a9a;
      }
      button{
        border: 1px solid #3BB9E3;
        background: #FFF;
        color: #3BB9E3;
        border-radius: 16px;
        height: 27px;
        width: 90px;
        font-size: 14px;
        font-weight: bold;
        display:flex;
        align-items:center;
        justify-content: center;
        margin-top: 10px;
        transition: 200ms;
        &:hover{
            color: ${shade(0.2,"#3BB9E3")};
            border-color: ${shade(0.2,"#3BB9E3")};
        }
      }
    }
`;