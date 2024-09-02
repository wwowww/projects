import { useEffect, useState } from "react";

type Props = {
  baseUrl: string,
  initialType: string
}

export const useFetch = ({baseUrl, initialType}: Props) => {
  const [data, setData] = useState(null);

  const fetchUrl = (type: string) => {
    fetch(baseUrl + '/' + type)
      .then(res => res.json())
      .then(res => setData(res))
  }

  useEffect(() => {
    fetchUrl(initialType)
  }, []);

  console.log(data)

  return {
    data,
    fetchUrl
  }
}