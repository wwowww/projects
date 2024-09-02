import { useEffect, useState } from "react";

export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedValue(value);
    }, delay)

    return () => {
      clearTimeout(timerID);
    }
  }, [value, delay])

  return debouncedValue;
}