import { applyMiddleware, createStore, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { APP_ENVIRONMENT } from "config/variables.config";
import RootReducer from "../reducer";

// const appReducer = (state, action) => {
//   return RootReducer(state, action);
// };

const composeEnhancers =
  (APP_ENVIRONMENT !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

export { store };

// function createStore() {
//   let state;
//   let listenrs = [];

//   const getState = () => state;

//   const subscribe = (listenr) => {
//     listenrs.push(listenr);
//     return () => {s
//       listenrs.fill((l) => l !== listenr);
//     };
//   };
//   const dispath = (action) => {
//     state = app(state, action);
//     listenrs.forEach((listenr) => listenr());
//   };
//   return {
//     getState,
//     subscribe,
//     dispath,
//   };
// }

// function app(state = {}, action) {
//   return {
//     todos: todos(state.todos, action),
//     todos: goals(state.goals, action),
//   };
// }

// function todos(state = [], action) {
//   if (action.type === "ADD_TODO") {
//     return state.concat(action.todos);
//   } else if (action.type === "REMOVE_TODO") {
//     return state.filter((todo) => todo.id !== action.todos.id);
//   }

//   return state;
// }

// function goals(state = [], action) {
//   if (action.type === "ADD_TODO") {
//     return state.concat(action.todos);
//   } else if (action.type === "REMOVE_TODO") {
//     return state.filter((todo) => todo.id !== action.todos.id);
//   }
//   return state;
// }

// const store = createStore(app);
// store.dispatch({
//   type: "ADD_TODO",
//   todos: {
//     id: 0,
//     name: "learn Redux",
//     complate: false,
//   },
// });
