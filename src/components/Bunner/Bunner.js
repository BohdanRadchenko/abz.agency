import React from 'react';
import {Link} from 'react-scroll'
import css from './Bunner.module.css'

const Bunner = () => {
  const screenWidth = document.documentElement.clientWidth;
  return (
    <div className={css.bunner}>
      <div className={css.container}>
        <div className={css.bunnerWrapper}>
          <div className={css.description}>
            <h1 className={css.title}>
              Test assignment <br/> for Frontend Developer position
            </h1>
            {screenWidth < 768 && (
              <p className={css.subtitle}>
                We kindly remind you that your test assignment should be submitted as a link to github/bitbucket
                repository.
              </p>
            )}
            {screenWidth >= 768 && (
              <p className={css.subtitle}>
                We kindly remind you that your test assignment should be submitted as a link to github/bitbucket
                repository. Please be patient, we consider and respond to every application that meets minimum
                requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area
                on the different screens
              </p>
            )}
          </div>
          <button className={css.btn}>
            <Link to="form" smooth={true} className={css.btnLink}>
              Sing up now
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Bunner;