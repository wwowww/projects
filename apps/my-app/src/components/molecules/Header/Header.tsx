import Toggle from "@/components/atoms/toggleButton/Toggle";
import TrafficLight from "@/components/molecules/trafficLight/TrafficLight";
import Typography from "@/components/atoms/typography/Typography";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.top}>
        <TrafficLight />
        <Toggle />
      </div>
      <div className={style.title}>
        <Typography Tag="h1" className="title-32-140-700">심플 노트</Typography>
        <Typography Tag="p" className="body-16-150-400">해야할 일들을 기록해보세요.</Typography>
      </div>
    </header>
  )
}

export default Header;