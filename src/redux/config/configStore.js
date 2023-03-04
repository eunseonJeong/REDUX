//중앙 데이터 관리소(state)를 설정하는 부분

import { createStore} from 'redux'; //스토어를 만드는 api
import { combineReducers } from 'redux'; //리듀서를 한번에 묶는 역할
import counter from '../modules/counter';

const rootReducer = combineReducers({
    counter,
});

const store = createStore(rootReducer);

export default store;