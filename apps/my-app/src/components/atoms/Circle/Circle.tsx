import style from "./Circle.module.scss";

type CircleProps = {
  color: string;
}

const circle = ({color}: CircleProps) => {
  return (
    <span className={style.circle} style={{backgroundColor: color}}></span>
  )
}

export default circle;