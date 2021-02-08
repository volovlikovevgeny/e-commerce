import React from 'react';
import { ReactComponent as Logo } from '../../assets/dragon.svg';
import CartIcon from '../shop-icon/shop-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'


import { HeaderContainer } from './header.styles';
import { LogoContainer } from './header.styles';
import { OptionsContaner } from './header.styles';
import { OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/' >
                <Logo />
            </LogoContainer>
            <OptionsContaner>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contacts'>CONTACT</OptionLink>
                {currentUser ? (
                    <OptionLink as='div' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                        <OptionLink to='/signin'>SIGN IN</OptionLink>
                    )}
                <CartIcon />
            </OptionsContaner>
            {
                hidden ? null : <CartDropDown />
            }
        </HeaderContainer>
    )
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);