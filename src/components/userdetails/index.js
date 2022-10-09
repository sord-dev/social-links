import React from 'react'
import styles from './index.module.css'
import Image from 'next/image'

export function UserDetails({me}) {
    const {uid, name, description, thumbnail} = me;
    const upperCaseName = name => `${name[0].toUpperCase()}${name.slice(1)}`

  return (
    <div className={styles.userDetails}>
          <Image src={thumbnail} width={75} height={75} />
          <p>{upperCaseName(name) + '#' + uid}</p>
          <p>{description}</p>
    </div>
  )
}