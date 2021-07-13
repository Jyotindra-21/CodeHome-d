import React from 'react';
import style from './Card.module.css'

const Card = ({title,icon,children}) => {
    return (
        <div className={style.card}>
        <div className={style.headingWrapper}>
          <img src={`/Images/${icon}.svg`} alt="logo" width="20px" />
          <h1 className={style.heading}>{title}</h1>
        </div>
        {children}
      </div>
    )
}

export default Card
