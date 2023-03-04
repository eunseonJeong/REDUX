import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import counter from "./redux/modules/counter";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  //여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
  //useSelector(Redux의 hook) 매개변수로 함수가 들어간다.

  const data = useSelector((state) => {
    return state;
  });

  console.log(data);
  //리덕스의 hook
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);

  return (
    <>
      <div>현재카운트 : {number}</div>
      
      <button
        onClick={() => {
          dispatch({
            type: "PLUS_ONE",
          });
        }}
      >
        플러스
      </button>

      <button
        onClick={() => {
          dispatch({
            type: "MINUS_ONE",
          });
        }}
      >
        마이너스
      </button>
    </>
  );
}

export default App;
