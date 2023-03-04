//초기 상태 값(state)

const initialState = {
    number: 0,
  };

//리듀서 : state에 변화를 일으키는 함수
    //1.state를 action의 type에 따라 변경하는 함수

//input값은 state와 action(store는 action을 type에 따라 state를 변경) 2가지를 받는다.
const counter = (state = initialState ,action) =>{
    switch(action.type){
        case 'PLUS_ONE':
            return {
                number: state.number +1,
            };
        case 'MINUS_ONE':
            return {
                number: state.number -1,
            }
        default:
            return state;
    }
}

export default counter;
