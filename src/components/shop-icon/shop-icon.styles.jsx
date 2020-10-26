import styled from 'styled-components';
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg'

export const ShopContainer = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items:center;
    cursor: pointer;

`

export const ShoppingIconSvg = styled(ShoppingIconSVG)`
    width: 24px;
    height: 24px;
`

export const ItemCountContainer = styled.span` 
    position: absolute;
    font-size: 11px;
    font-weight: bold;
    bottom: 14px; 
`

