import styled, {css} from 'styled-components';
import {shade} from 'polished';

interface ILi {
    isSelected?: boolean;
}

export const Container = styled.div`
  height: 59px;
  background: #FFF;
  box-shadow: 0 1px 3px rgba(0,0,0,0.25);
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
  padding-left: 220px !important;

  @media(max-width: 480px){
    padding-left: 20px !important;
  }
`;

export const Ul = styled.ul`
  display:flex;
  list-style: none;
  height: 100%;
`;

export const Li = styled.li<ILi>`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding: 0 15px;
    position:relative;
    ${props => props.isSelected && css`
        &::after{
            content: "";
            height: 2px;
            width: 100%;
            position:absolute; 
            bottom:0;
            left:0;
            background:#3bb9e3;
        }
    `} 
    span{
      color: #667580;
      font-size: 12px;
      font-weight: bold; 
    }

    strong{
      color: #667580;
      font-size: 18px;
      font-weight: bold; 
      margin-top: 2px;   
      ${props => props.isSelected && css`
        color: #3bb9e3;
      `} 
    }

    @media(max-width: 700px){
      &:nth-child(1n + 4){
        display:none;
      }
    }
`;

export const Actions = styled.div`
  display:flex;
  button{
    border: 1px solid #3BB9E3;
    background: #FFF;
    color: #3BB9E3;
    border-radius: 16px;
    height: 34px;
    width: 90px;
    font-size: 14px;
    font-weight: bold;
    display:flex;
    align-items:center;
    justify-content: center;
    margin-right: 20px;
    transition: 200ms;
    &:hover{
        color: ${shade(0.2,"#3BB9E3")};
        border-color: ${shade(0.2,"#3BB9E3")};
    }
    
    @media(max-width: 820px){
      display:none;
    }
  }
`;
