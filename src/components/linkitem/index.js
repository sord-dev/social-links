import React from 'react'
import styles from './index.module.css'

export function LinkItem({title = "please provide a link object.", description = '', href = "https://github.com/sord-dev"}) {
  const titleClass = description ? '' : styles.center;
  return (
    <a className={styles.linkItem} href={href} target="_blank" rel='noreferrer noopener' >
      <h3 className={titleClass}>{title}</h3>
      {description && <p>{description}</p>}
    </a>
  )
}