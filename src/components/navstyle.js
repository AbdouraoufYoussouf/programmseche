import styled from 'styled-components'

export const NavBare = styled.div`
   // background-color: #282c34;
   background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%); 
   width: 100%;
    height: 100%; 
    position: sticky;
    top: 0;
    z-index: 100; 
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 60px;
    
`;
export const Left = styled.div`
    height: 100%;
    width: 300px;
    display: flex;
    margin-bottom: 28px;
    h1{
        color: white;
        padding-bottom: 10px;
    }
`;
export const Right = styled.div`
    height: 100%;
    width: 20%;
    ul{
        display: flex;
        justify-content: space-between;

        li{
            list-style: none;
            font-size: 20px;
            color: white;
        }
    }
    .actived{
    transition: all 0.2s ease-out;
    color: red;
    margin-left: 10px;
    text-decoration: none;
  }
  .actived:hover{
    color: white;
  }
  .navlink {
    color: white;
    text-transform: capitalize;
    text-decoration: none;
    text-decoration: none;
  }
  .navlink:hover {
    color: white;
  }
`;