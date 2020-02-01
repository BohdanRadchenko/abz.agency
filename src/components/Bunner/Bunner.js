import React from 'react';
import {Link} from 'react-scroll'
import css from './Bunner.module.css'

const Bunner = () => {
  return (
    <div className={css.container}>
      <div className={css.bunnerWrapper}>
        <div>
          <h1 className={css.title}>
            Test assignment <br/> for Frontend Developer position
          </h1>
          <p className={css.subtitle}>
            We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.
          </p>
        </div>
        <button className={css.button}>
          <Link to="form" smooth={true}>
            Sing up now
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Bunner;