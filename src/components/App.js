import React, {Component, lazy, Suspense} from 'react';
import {scrollSpy} from 'react-scroll'
import {connect} from 'react-redux';
import Loaders from './Loaders'
import * as usersOperations from '../redux/users/usersOperations';
import * as controllerSelectors from '../redux/controller/controllerSelectors';

import css from './App.module.css'

const AsyncModal = lazy(() =>
  import("./Modal/Modal"),
);
const AsyncHeader = lazy(() =>
  import("./Header/Header"),
);
const AsyncBurgerMenu = lazy(() =>
  import("./BurgerMenu/BurgerMenu"),
);

const AsyncBunner = lazy(() =>
  import("./Bunner/Bunner"),
);
const AsyncAbout = lazy(() =>
  import("./About/About"),
);
const AsyncUsers = lazy(() =>
  import("./Users/Users"),
);
const AsyncRegistredForm = lazy(() =>
  import("./RegistredForm/RegistredForm"),
);
const AsyncFooter = lazy(() =>
  import("./Footer/Footer"),
);

class App extends Component {
  componentDidMount() {
    const page = this.props.page;
    this.props.fetchUsers(page);
    this.props.fetchToken();
    this.props.fetchPositions();
    scrollSpy.update();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      const page = this.props.page;
      this.props.fetchUsers(page);
    }
  };

  render() {
    return (
      <Suspense fallback={<Loaders />}>
        <AsyncModal/>
        <AsyncHeader/>
        <div className={css.container}>
          <AsyncBurgerMenu/>
        </div>
        <AsyncBunner/>
        <div className={css.container}>
          <AsyncAbout/>
        </div>
          <AsyncUsers/>
        <div className={css.container}>
          <AsyncRegistredForm/>
        </div>
          <AsyncFooter/>
      </Suspense>
    )
  }
}

const mapStateToProps = state => ({
  page: controllerSelectors.getPage(state),
});

const mapDispatchToProps = {
  fetchUsers: usersOperations.fetchUsers,
  fetchToken: usersOperations.fetchToken,
  fetchPositions: usersOperations.fetchPositions,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
