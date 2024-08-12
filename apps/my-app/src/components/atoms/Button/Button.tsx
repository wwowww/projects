import { ReactNode, HTMLAttributeAnchorTarget } from "react";
import "./Button.scss";

type ButtonProps = {
  type?: "button" | "submit";
  onClick: () => void;
  className?: string;
  buttonType?: "basic" | "close" | "add" | "back";
  buttonColor?: string; 
  children: ReactNode;  
  link?: {
    href: string;
    target: HTMLAttributeAnchorTarget;
  };
}

const Button = ({ type="button", link, buttonType="basic", className, onClick, children }: ButtonProps) => {
  return !link ? (
    <button
      className={`${buttonType} button ${className ? className : ""}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <a
      href={link?.href}
      target={link?.target ?? "_self"}
      className="anchor"
    >
      {children}
    </a> 
  )
}

export default Button;