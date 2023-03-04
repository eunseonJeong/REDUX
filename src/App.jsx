import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { plusOne, minusOne, plusN , minusN } from "./redux/modules/counter";
import { useState } from "react";

function App() {
  const [number,setNumber] = useState(0);
  //여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
  //useSelector(Redux의 hook) 매개변수로 함수가 들어간다.

  const counter = useSelector((state) => {
    return state.counter;
  });

  //리덕스의 hook
  const dispatch = useDispatch();

  const changeBtn = (e) =>{
    setNumber(+e.target.value)
  }

  // //확인
  // useEffect(() =>{
  //   console.log('number->', number);
  // },[number])

  return (
    <>
      <div>현재카운트 : {counter.number}</div>
     <input type='number' value={number} onChange={changeBtn} />

      <button
        onClick={() => {
          // dispatch(plusOne());
          dispatch(plusN(number))
        }}
      >
        플러스
      </button>

      <button
        onClick={() => {
          // dispatch(minusOne());
          dispatch(minusN(number))
        }}
      >
        마이너스
      </button>
    </>
  );
}

export default App;
