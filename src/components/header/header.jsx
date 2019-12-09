import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/retro_logo.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'> 
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' data-cy='shop-header' to='/shop'>
        SHOP
      </Link>
      <Link className='option' data-cy='saved-header' to='/saved'>
        SAVED
      </Link>
      {
        currentUser ?
        <div className='option' data-cy='sign-out-header' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
        :
        <Link className='option' data-cy='sign-in-header' to='/signin'>
          SIGN IN
        </Link>
      }
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
)

export default connect(mapStateToProps)(Header);