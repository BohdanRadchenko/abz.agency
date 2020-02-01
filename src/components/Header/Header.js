import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {Element, Link, scrollSpy } from "react-scroll";
import * as controllerAction from '../../redux/controller/controllerActions'
import css from './Header.module.css'


const Header = ({burgerMenuToogle}) => {
  // const screenWidth = document.documentElement.clientWidth;
  useEffect( () => {
    scrollSpy.update();
  });

  return (
    <Element name="header" className="element">
      <div className={css.container}>
        <nav className={css.navigation}>
          <Link to="header" className={css.logo} smooth={true}></Link>

          <ul className={css.menuList}>
            <li className={css.menuItem}>
              <Link activeClass={css.activeLink}
                    spy={true}
                    to="about"
                    className={css.menuLink}
                    smooth={true}>
                About Me
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link activeClass={css.activeLink}
                    spy={true}
                    to="/"
                    className={css.menuLink}
                    smooth={true}>
                Relationships
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link activeClass={css.activeLink}
                    spy={true}
                    to="/"
                    className={css.menuLink}
                    smooth={true}>
                Requirements
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link activeClass={css.activeLink}
                    spy={true}
                    to="users"
                    className={css.menuLink}
                    smooth={true}>
                Users
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link activeClass={css.activeLink}
                    spy={true}
                    to="form"
                    className={css.menuLink}
                    smooth={true}>
                Sign Up
              </Link>
            </li>
          </ul>
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
