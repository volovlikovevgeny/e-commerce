import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';


export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 250px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    top: 90px;
    right: 40px;
    z-index: 5;
    background-color: white;
   
`;

export const CartItemsContainer = styled.div`
    height: 250px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
 
`

export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;

`

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

