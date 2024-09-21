import { ReactNode } from "react";
import Typography from "@/components/atoms/Typography/Typography";
import style from "./Empty.module.scss";

type emptyProps = {
  content?: string; 
  children?: string | ReactNode; 
  height?: number | string;
}

const Empty = ({ content, children, height }: emptyProps) => {
  return (
    <div className={style.empty} style={{height: height ? height : 160}}>
      {content && <Typography className="body-18-150-400">{content}</Typography>}
      {children}
    </div>
  )
  
}

export default Empty;