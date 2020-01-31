import React from 'react';
import {Element} from "react-scroll";
import css from './RegistredForm.module.css'

const RegistredForm = () => {
  return (
    <Element name="form" className="element">
      <div className={css.container}>
        <input
          type="file"
          accept=".txt"
          />
      </div>
    </Element>
  )
};

export default RegistredForm;