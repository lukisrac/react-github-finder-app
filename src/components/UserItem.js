import { useContext } from 'react';
import SearchContext from '../store/search-context';

const UserItem = (props) => {
  const ctx = useContext(SearchContext);
  const searchUser = (url) => {
    ctx.showSpinner();
    ctx.fetchUser(url).then((data) => {
      ctx.getUserInfo(data);
    });
  };

  return (
    <div className="col">
      <div className="card user">
        <div className="card-body text-center">
          <img
            src={props.data.avatar_url}
            alt="Avatar"
            className="user__image"
          />
          <p className="user__name my-3 fw-bold">{props.data.login}</p>
          <button
            type="button"
            data-href={props.data.url}
            className="btn btn-dark user__more-info"
            onClick={searchUser.bind(this, props.data.url)}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
