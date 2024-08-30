import { useEffect, useState } from "react";

type Props = {
  createBoxStyle: any
}

const Box = ({createBoxStyle}: Props) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log("box 키우기");
    setStyle(createBoxStyle())
  }, [createBoxStyle])

  return (
    <div style={style}></div>
  )
}

export default Box;