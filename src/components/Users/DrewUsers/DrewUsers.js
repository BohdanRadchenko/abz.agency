import React from 'react';
import css from './DrewUsers.module.css'

const DrewUsers = ({name, email, phone, position, photo}) => {
  return (
    <div className={css.container}>
     <div className={css.imageWrapper}>
       <img className={css.image} src={photo} alt="avatars"/>
     </div>
      <p className={name.length < 16 ? (css.name) : (css.nameLong)}> {name} </p>
      <p className={css.position}> {position} </p>
      <p
        className={email.length <= 20 ? css.email : [css.emailLong, css.email].join(' ')}
         tooltip={email} >
        {email.length <= 20 ? email : email.slice(0, 10) + "..." + email.slice(-10)}
       </p>
      <p className={css.phone}> {phone} </p>
    </div>
  )
};

export default DrewUsers;