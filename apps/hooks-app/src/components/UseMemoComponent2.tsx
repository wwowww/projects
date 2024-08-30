import { useEffect, useMemo, useState } from "react";

const UseMemoComponent2 = () => {
  const [number, setNumber] = useState<number>();
  const [isKorea, setIsKorea] = useState<boolean>(true);

  // const location = isKorea ? "한국" : "외국";
  // const location = {
    // country: isKorea ? "한국" : "외국"
  // }
// 메모리상의 주소가 달라서 객체타입끼리 똑같다고 생각해도 로케이션이 참조하는 것이 각각 다름 -> useMemo 사용
  
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국"
    }
  }, [isKorea]);

  useEffect(() => {
    console.log("useEffect 호출!")
  }, [location]);
  
  return (
    <>
      <h2>하루에 몇 끼 먹어요?</h2>
      <input 
        type="number" 
        value={number}
        onChange={(e) => setNumber(+(e.target.value))}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button
        onClick={() => setIsKorea(!isKorea)}
      >
      비행기 타자
      </button>
    </>
    
  )
}

export default UseMemoComponent2;