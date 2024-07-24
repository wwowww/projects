import styles from './Toggle.module.scss';

const Toggle = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? document.documentElement.setAttribute("data-theme", "dark")
      : document.documentElement.setAttribute("data-theme", "light")
  }

  return (
    <div className={styles.toggle}>
      <input type="checkbox" id="switch" name="mode" onChange={onChange} />
      <label htmlFor="switch">Toggle</label>
      <div className={styles.emoji}>
        <span className={styles.emojiSun}>☀️</span>
        <span className={styles.emojiMoon}>🌙</span>
      </div>
    </div>
  )
}

export default Toggle;