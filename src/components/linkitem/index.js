import React from 'react'
import styles from './index.module.css'

export function LinkItem({title = "please provide a link object.", href = "https://github.com/sord-dev"}) {
  return (
    <a className={styles.linkItem} href={href}>
      <p>{title}</p>
    </a>
  )
}
