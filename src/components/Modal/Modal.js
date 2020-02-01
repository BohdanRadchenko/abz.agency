import React, {Component, createRef} from 'react';
import {connect} from "react-redux";
import * as usersSelectors from '../../redux/users/usersSelectors';
import * as controllerSelectors from '../../redux/controller/controllerSelectors';
import * as controllerActions from '../../redux/controller/controllerActions'
import css from './Moda.module.css'

class Modal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.modalClose();
  };

  handleBackdropClick = e => {
    const {current} = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    this.props.modalClose();
  };

  render() {
    const {modalIsOpen, modalClose} = this.props;

    if (!modalIsOpen) {
      return null
    }

    return (
      <div
        className={css.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={css.modal}>
          <div className={css.container}>
            <div className={css.header}>
              <h1 className={css.title}>
                Congratulations
              </h1>
              <button
                className={css.buttonClose}
                onClick={e => modalClose(e)}
              >
              </button>
            </div>
            <div className={css.desc}>
              <p className={css.text}>
                You have successfully passed the registration
              </p>
            </div>
            <button
              onClick={e => modalClose(e)}
              className={css.greatButton}
            >
              Great
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  message: usersSelectors.getMessage(state),
  modalIsOpen: controllerSelectors.modalIsOpen(state)
});

const mapDispatchToProps = {
  modalClose: controllerActions.modalClose
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);