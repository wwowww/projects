import { ReactNode, HTMLAttributeAnchorTarget } from "react";

type ButtonProps = {
  children: ReactNode;  
  link?: {
    href: string;
    target: HTMLAttributeAnchorTarget;
  };
}

const Button = ({ link, children }: ButtonProps) => {
  return !link ? (
    <button
      type="button"
    >
      {children}
    </button>
  ) : (
    <a
      href={link?.href}
      target={link?.target ?? "_self"}
    >
      {children}
    </a> 
  )
}

export default Button;