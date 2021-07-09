import BookList from './components/BookList'
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql',
  cache: new InMemoryCache()
});
function App() {
  return (
    <ApolloProvider client={client} >
    <div className="App">
        <h1>Helo react</h1>
      <BookList/>
    </div>
    </ApolloProvider>
  );
}

export default App;
