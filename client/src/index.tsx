import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from "./store/store";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

interface State {
    store: Store,
}

export const store = new Store();

export const Context = createContext<State>({
    store,
})

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql' ,
    cache: new InMemoryCache()

})

ReactDOM.render(

    <ApolloProvider client={client}>
        <Context.Provider value={{
            store
        }}>
            <App />
        </Context.Provider>,
    </ApolloProvider>,
  document.getElementById('root')
);

