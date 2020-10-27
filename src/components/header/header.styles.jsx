import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
 
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px){
        height:60px;
        margin-bottom:20px;
        padding:10px;
}
`

export const LogoContainer = styled(Link)`

    width: 70px;
    height: 100%;
    padding: 10px;

    @media screen and (max-width: 800px){
        width:50px;
        padding:0;
}
`

export const OptionsContaner = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px){
       width:80%;
}
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
  

    @media screen and (max-width: 800px){
        padding:10px;
    }

    @media screen and (max-width: 340px){
        padding:7px;
    }

    @media screen and (max-width: 317px){
        padding:1px;
    }
`