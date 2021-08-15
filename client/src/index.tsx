import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/store";



interface State {
  store: UserStore,
}

export const store = new UserStore();

export const Context = createContext<State>({
  store,
})


ReactDOM.render(
  <Context.Provider value={{
    store
}}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);