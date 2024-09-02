import { useEffect, useState } from "react";

export const useFetch = <T = any>(baseUrl: T, initialType?: string) => {
  const [data, setData] = useState<T>(null as T);

  const fetchUrl = (type: string) => {
    fetch(baseUrl + '/' + type)
      .then(res => res.json())
      .then(res => setData(res))
  }

  useEffect(() => {
    fetchUrl(initialType ? initialType : "")
  }, []);

  return {
    data,
    fetchUrl
  }
}