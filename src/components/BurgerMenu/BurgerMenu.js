import React from 'react';
import { Link} from 'react-scroll';
import { connect } from 'react-redux';
import * as controllerActions from '../../redux/controller/controllerActions';
import * as controllerSelectors from '../../redux/controller/controllerSelectors';
import css from './BurgerMenu.module.css';



const BurgerMenu = ({isOpen, burgerMenuToogle}) =>  {
    return (
      <>
        {isOpen && (
            <div className={css.container}>
            <nav className={css.navigation}>
              <div className={css.logoWrap}>
                <Link to="header" className={css.logo} smooth={true} onClick={(e) => burgerMenuToogle()}></Link>
              </div>


              <div className={css.menuSection}>
                <ul className={css.menuList}>
                  <li className={css.menuItem}>
                      <Link to="header" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link to="about" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      Relationships
                    </Link>
                  </li>
                  <li className={css.menuItem}>
                    <Link to="users" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      Users
                    </Link>
                  </li>
                  <li className={css.menuItem}>
                    <Link to="header" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      Sign Up
                    </Link>
                  </li>
                  <li className={css.menuItem}>
                    <Link to="header" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      Terms and Conditions
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={css.menuSection}>
                <ul className={css.menuList}>
                  <li className={css.menuItem}>
                    <Link to="header" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      How it works
                    </Link>
                  </li>
                  <li className={css.menuItem}>
                    <Link to="header" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      Partnership
                    </Link>
                  </li>
                  <li className={css.menuItem}>
                    <Link to="header" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      Help
                    </Link>
                  </li>
                  <li className={css.menuItem}>
                    <Link to="header" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      Leave testimonial
                    </Link>
                  </li>
                  <li className={css.menuItem}>
                    <Link to="header" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={css.menuSection}>
                <ul className={css.menuList}>
                  <li className={css.menuItem}>
                    <Link to="header" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      Articles
                    </Link>
                  </li>
                  <li className={css.menuItem}>
                    <Link to="header" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      Our news
                    </Link>
                  </li>
                  <li className={css.menuItem}>
                    <Link to="header" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      Testimonials
                    </Link>
                  </li>
                  <li className={css.menuItem}>
                    <Link to="header" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      Licenses
                    </Link>
                  </li>
                  <li className={css.menuItem}>
                    <Link to="header" className={css.menuLink} smooth={true} onClick={(e) => burgerMenuToogle()}>
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

            </nav>
          </div>
        ) }
      </>
    );
  }

const mapStateToProps = state => ({
  isOpen: controllerSelectors.burgerMenuIsOpen(state)
});
const mapDispatchToProps = dispatch => ({
  burgerMenuToogle: () => dispatch(controllerActions.burgerMenuOpen())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BurgerMenu);
