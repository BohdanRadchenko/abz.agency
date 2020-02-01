import React, {Component} from 'react';
import {connect} from 'react-redux';
import { scrollSpy} from 'react-scroll'
import * as usersOperations from '../redux/users/usersOperations';
import * as controllerSelectors from '../redux/controller/controllerSelectors';

import Modal from "./Modal/Modal";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Header from "./Header/Header";
import Bunner from "./Bunner/Bunner";
import AboutMe from "./About/About";
import Users from "./Users/Users";
import RegistredForm from "./RegistredForm/RegistredForm";
import Footer from "./Footer/Footer";

import css from './App.module.css'


class App extends Component {
  componentDidMount() {
  const page = this.props.page;
    this.props.fetchUsers(page);
    this.props.fetchToken();
    this.props.fetchPositions();
    scrollSpy.update();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.page !== this.props.page){
      const page = this.props.page;
      this.props.fetchUsers(page);
    }
  };

  render() {
    return (
      <div className={css.container}>
        <Modal/>
        <BurgerMenu />
        <Header/>
        <Bunner/>
        <AboutMe/>
        <Users/>
        <RegistredForm/>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  page : controllerSelectors.getPage(state)
});

const mapDispatchToProps = {
  fetchUsers: usersOperations.fetchUsers,
  fetchToken: usersOperations.fetchToken,
  fetchPositions: usersOperations.fetchPositions,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
