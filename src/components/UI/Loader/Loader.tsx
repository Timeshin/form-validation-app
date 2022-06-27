import React from 'react'

import classes from './style.module.scss'

const Loader = () => {
  return (
    <div className={classes.loaderWrapper}>
      <div className={classes.loader}>
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    </div>
  )
}

export default Loader