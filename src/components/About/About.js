import React from 'react';
import {Element, Link} from 'react-scroll';
import css from './About.module.css'


const About = () => {
  return (
    <Element name="about" className="element">
      <div className={css.container}>
        <h1 className={css.title}> Let's get acquainted </h1>
        <div className={css.sideWrapper}>
        <div className={css.leftSide}>
          <div className={css.imageWrapper}>
          </div>
        </div>
        <div className={css.rigthSide}>
          <p className={css.subtitle}> I a cool frontend developer </p>
          <div className={css.descriptionWrapper}>
            <p className={css.desc}>
              We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and
              Javascript 3rd party libraries without any restriction.
            </p>
            <p className={css.desc}>
              If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus
              points.
              If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page
              P​SD mockup​ into HTML5/CSS3.
            </p>
          </div>
          <Link to="form" smooth={true} className={css.button}>
            Sing up now
          </Link>
        </div>
      </div>
      </div>
    </Element>
  )
};

export default About;