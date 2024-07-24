import Circle from "@/components/atoms/circle/Circle";
import style from "./TrafficLight.module.scss";

const TrafficLight = () => {
  return (
    <div className={style.wrap}>
      <Circle color="#ff6056"></Circle>
      <Circle color="#febc2e"></Circle>
      <Circle color="#2bc840"></Circle>
    </div>
  )
}

export default TrafficLight;