import React from 'react';
import {connect} from 'react-redux'
import {Element, Link} from "react-scroll";
import * as controllerAction from '../../redux/controller/controllerActions'
import css from './Header.module.css'


const Header = ({burgerMenuToogle}) => {
  // const screenWidth = document.documentElement.clientWidth;
  return (
    <Element name="header" className="element">
      <div className={css.container}>
        <nav className={css.navigation}>
          <Link to="header" className={css.logo} smooth={true}></Link>
          <button className={css.burgerButton} onClick={() => burgerMenuToogle()}></button>
        </nav>
      </div>
      <div className={css.crutch}></div>
    </Element>
  )
};

const mapDispatchToProps = dispatch => ({
  burgerMenuToogle: () => dispatch(controllerAction.burgerMenuOpen())
});

export default connect(
  null,
  mapDispatchToProps,
)(Header);
