import { useContext } from 'react';
import UserItem from './UserItem';
import SearchContext from '../store/search-context';

const UsersList = () => {
  const ctx = useContext(SearchContext);
  const users = ctx.users;

  return (
    <section
      className="section-results py-4"
      id="section-results"
    >
      <div className="container">
        <div className="row results-row row-cols-1 row-cols-md-4 g-4">
          {users.map((user) => (
            <UserItem
              key={user.id}
              data={user}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsersList;
