import styled from 'styled-components';

export const Container = styled.aside`
  width: 260px;
  h1{
    font-size: 21px;
    color: #1f2226;
    margin-top: 10px;
  }
  span{
    font-size: 14px;
    color: #53626c;
  }
  p{
    font-size: 14px;
    color: #53626c;
    margin-top: 15px;
  }
  @media(max-width: 700px){
      width: 200px;
  }
  @media(max-width: 480px){
      display:none;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  margin-top: 20px;
  li{
    font-size: 14px;
    color: #657786;
    display:flex;
    align-items:center;
    margin-bottom: 5px;
    img{
      margin-right:10px;
    }
  }
`;

export const AvatarImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #fff;
  margin-top: -130px;
`;

export const Widget = styled.div`
  margin-top: 20px;
  strong{
    font-weight: normal;
    font-size: 14px;
    color: #3BB9E3;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img{
      margin-right: 10px;
    }
  }
  ul{
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    li{
      width:40px;
      height: 40px;
      border-radius: 50%;
      background: #d0d5d9;
      margin: 2px 2px;
    }
  }
`;

export const ImagesContainer = styled.div`
  margin-top: 20px;
  strong{
    font-weight: normal;
    font-size: 14px;
    color: #3BB9E3;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img{
      margin-right: 10px;
    }
  }
  ul{
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    li{
      width: 80px;
      height: 80px;
      border-radius: 10%;
      background: #d0d5d9;
      margin: 2px 2px;
    }
  }
`;