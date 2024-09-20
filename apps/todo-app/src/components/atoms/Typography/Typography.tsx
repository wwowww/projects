import { ReactNode } from "react";
import { TypographyVariants, TypographyCode } from "@/types/Typography";

type TypographyProps = {
  Tag?: TypographyVariants;
  children: ReactNode;
  className?: TypographyCode;
  color?: string;
  wordBreak?: boolean;
  whiteSpace?: boolean;
}

const Typography = ({Tag="span", className, children, color, wordBreak, whiteSpace}:TypographyProps) => {
  return (
    <Tag
      style={{
        color: color,
        fontSize: Number(className?.split("-")[1]),
        lineHeight: `${Number(className?.split("-")[2])}%`,
        fontWeight: Number(className?.split("-")[3]),
        letterSpacing: -0.02 * Number(className?.split("-")[1]),
        wordBreak: wordBreak ? "break-all" : undefined,
        whiteSpace: whiteSpace ? "pre-wrap" : undefined,
      }}
    >
      {children}
    </Tag>
  )
}

export default Typography;