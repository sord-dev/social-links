import styles from './index.module.css'

export function LinkGrid({ links }) {
  const testArr = [{src: 'https://github.com/sord-dev', tag: 'Github'}, {src: 'https://linkedin.com/in/stefansyrett/', tag: 'LinkedIn'}];
  return (
   <div className={styles.grid}>
    {testArr.map(link => (
      <LinkItem key={link.tag} {...{ link }} />
    ))}
   </div>
  );
}

function LinkItem({ link }) {
  return (
    <a className={styles.item} href={link.src} target="_blank" rel="noopener noreferrer">
    {link.tag}
    </a>
  )
}