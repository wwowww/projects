"use client";

import { useRef, useEffect, TextareaHTMLAttributes } from "react";
import { Textarea } from "../ui/textarea";

const AutoResizingTextarea = ({
  value, ...others
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'inherit';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <Textarea
      className="min-h-[40px] max-h-[200px]"
      ref={textareaRef}
      value={value}
      {...others}
    />
  )
}

export default AutoResizingTextarea;