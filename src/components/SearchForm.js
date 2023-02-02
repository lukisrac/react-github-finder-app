import { useContext, useRef } from 'react';
import SearchContext from '../store/search-context';

const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: `${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
};

const SearchForm = () => {
  const ctx = useContext(SearchContext);
  const inputRef = useRef();

  const searchUsers = async (value) => {
    const response = await fetch(`https://api.github.com/search/users?q=${value}&per_page=20`, requestOptions);
    const data = await response.json();
    return data;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    ctx.showSpinner();
    const value = inputRef.current.value;
    searchUsers(value)
      .then((data) => {
        ctx.fetchUsers(data.items);
        ctx.hideSpinner();
        inputRef.current.value = '';
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      id="searchForm"
      className="my-3 p-2 rounded-lg"
      onSubmit={submitHandler}
    >
      <div className="row gx-2">
        <div className="col-1">
          <label
            htmlFor="search"
            className="w-100 h-100 d-flex justify-content-center align-items-center"
          >
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              className="bi bi-search"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
          </label>
        </div>
        <div className="col-9">
          <input
            ref={inputRef}
            type="text"
            id="search"
            className="form-control border-0"
            placeholder="Enter GitHub user"
            autoComplete="off"
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-block btn-primary"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
