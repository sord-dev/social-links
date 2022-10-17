import React from 'react'
import styles from './index.module.css'

export function LinkItem({title = "please provide a link object.", description = '', href = "https://github.com/sord-dev"}) {
  return (
    <a className={styles.linkItem} href={href}>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  )
}
