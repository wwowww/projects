import style from "./Cat.module.scss";

const Cat = () => {
  return (
    <div className={style.wrap}>
      <div className={style.shadow}></div>
      <div className={style.cat}>
          <div className={style.ear}></div>
          <div className={style.eye}></div>
          <div className={style.mouth}></div>
          <div className={style.nose}></div>
          <div className={style.tail}></div>
          <div className={style.body}></div>
          {/* <div className={style.bubble}></div> */}
      </div>
    </div>
  )
}

export default Cat;