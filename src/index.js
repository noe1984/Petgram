import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import Context from './Context'

const httpLink  = createHttpLink ({
  uri: 'https://api-nine-gamma.vercel.app/graphql'
});

const authLink = setContext ((_, { headers }) => { // get the authentication token from local storage if it exists
  const token = window.sessionStorage.getItem('token') // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


const client = new ApolloClient({

  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),

  onError: onError(
    ({ networkError }) => {
      if (networkError && networkError.result.code === 'invalid_token') {
        window.sessionStorage.removeItem('token')
        window.location.href = '/'
      }
    } 
  )

})


ReactDOM.render(
  <Context.Provider>
      <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app') 
)

  
  // import { ApolloProvider, ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';
  // import { onError } from '@apollo/client/link/error'
  // import Context from './Context'
  
  // const httpLink = new HttpLink({ uri: 'https://api-nine-gamma.vercel.app/graphql' });
  
  // const authMiddleware = new ApolloLink((operation, forward) => {
  //   // add the authorization to the headers
  //   const token = window.sessionStorage.getItem('token')
  //   operation.setContext(({ headers = {} }) => ({
  //     headers: {
  //       ...headers,
  //       authorization: token ? `Bearer ${token}` : "",
  //     }
  //   }));
  
  //   return forward(operation);
  // })
  
  // const client = new ApolloClient({
  //   cache: new InMemoryCache(),
  //   link: concat(authMiddleware, httpLink),
  //     onError: onError(
  //     ({ networkError }) => {
  //       if (networkError && networkError.result.code === 'invalid_token') {
  //         window.sessionStorage.removeItem('token')
  //         window.location.href = '/'
  //       }
  //     } 
  //   )
  // });


// https://www.apollographql.com/docs/react/networking/authentication/
// https://www.apollographql.com/docs/react/networking/advanced-http-networking/#customizing-request-logic