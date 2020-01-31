import React, {useEffect, useState} from 'react';
import {Element} from "react-scroll";
import {connect} from 'react-redux';
import arraySort from '../../helpers/sort.helpers'
import * as usersSelectors from '../../redux/users/usersSelectors';
import * as controllerSelectors from '../../redux/controller/controllerSelectors';
import * as controllerActions from '../../redux/controller/controllerActions';
import DrewUsers from "./DrewUsers/DrewUsers";
import css from './Users.module.css';


const Users = ({users, handleCurrentPage, totalPage}) => {
  const sort = arraySort(users);
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowMore = () => {
    if (totalPage > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    handleCurrentPage(currentPage);
  }, [handleCurrentPage, currentPage]);

  return (
    <Element name="users" className="element">
      <div className={css.container}>
        <h1 className={css.title}>
          Our cheerful users
        </h1>
        {/*<p className={css.subtitle}>*/}
        {/*  Attention! Sorting users by registration date*/}
        {/*</p>*/}
        {users.length !== 0 && (
          <ul className={css.userList}>
            {sort.map(el => (
              <li key={el.id} className={css.userItems}>
                <DrewUsers {...el} />
              </li>
            ))}
          </ul>
        )}
        <button
          className={totalPage > currentPage ? (css.showMore) : (css.disableButton)}
          disabled={totalPage > currentPage ? false : true}
          onClick={() => handleShowMore()}
        >
          Show more
        </button>
      </div>
    </Element>
  )
};

const mapStateToProps = state => ({
  users: usersSelectors.getAllUsers(state),
  totalPage: controllerSelectors.getTotalPage(state)
})

const mapDispatchToProps = {
  handleCurrentPage: controllerActions.handleCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);