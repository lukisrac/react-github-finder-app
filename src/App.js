import { useContext } from 'react';
import SearchContext from './store/search-context';

import Container from './components/Container';
import Header from './components/Header';
import Search from './components/Search';
import Spinner from './components/Spinner';
import User from './components/User';
import UsersList from './components/UsersList';

function App() {
  const ctx = useContext(SearchContext);
  const user = ctx.user;

  return (
    <>
      <Header />
      <Container>
        <Search />
        {ctx.isLoading ? <Spinner /> : null}
        {ctx.hasResults && !ctx.isLoading ? <UsersList /> : null}
        {user && !ctx.isLoading ? <User user={user} /> : null}
      </Container>
    </>
  );
}

export default App;
