//여기서만 PLUS_ONE을 사용하는게 아니기때문에 export해줬다.
export const PLUS_ONE = "PLUS_ONE";
export const MINUS_ONE = "MINUS_ONE";
export const PLUS_N = "PLUS_N";
export const MINUS_N = "MINUS_N";


//action creator : action value를 retrun하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

export const plusN =(payload)=>{
    return {
        type: PLUS_N,
        payload,
    }
}

export const minusN= (payload) => {
    return {
        type: MINUS_N,
        payload,
    }
}

//초기 상태 값(state)
const initialState = {
  number: 0,
};

//리듀서 : state에 변화를 일으키는 함수
//1.state를 action의 type에 따라 변경하는 함수

//input값은 state와 action(store는 action을 type에 따라 state를 변경) 2가지를 받는다.
//action 객체라는 것은 action type을 payload 만큼 처리하는 것이다!
//ex : payload가 3이다. 3만큼을 plus

const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
      case PLUS_N:
        return {
            number: state.number + action.payload,
        }
        case MINUS_N:
            return {
                number: state.number - action.payload,
            }
    default:
      return state;
  }
};

export default counter;
