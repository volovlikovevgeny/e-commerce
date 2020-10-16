import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/dragon.svg';
import CartIcon from '../shop-icon/shop-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/' >
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shoppage'>SHOP</Link>
                <Link className='option' to='/contacts'>CONTACT</Link>

                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                        <Link className='option' to='/signin'>SIGN IN</Link>
                    )}
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropDown />
            }

        </div>
    )
}


const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);