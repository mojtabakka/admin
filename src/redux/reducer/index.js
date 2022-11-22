import { combineReducers } from "redux";
// import {APP_SET_RESET} from 'redux/types';
// import GeneralReducer from './general.reducer';
// import TransferReducer from './transfer.reducer';
// import UserReducer from './user.reducer';
// import WidgetReducer from './widget.reducer';

const appReducer = combineReducers({
  //   general: GeneralReducer,
  //   transfer: TransferReducer,
  //   user: UserReducer,
  //   widget: WidgetReducer
});

const rootReducer = (state, action) => {
  //   if (action.type === APP_SET_RESET) {
  //     const {configs} = state.general;
  //     const newState = {general: {configs}};
  //     return appReducer(newState, action);
  //   }

  return appReducer(state, action);
};

export default rootReducer;
