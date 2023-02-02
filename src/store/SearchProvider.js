import { useReducer } from 'react';
import SearchContext from './search-context';

const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: `${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
};

const defaultState = {
  isLoading: false,
  hasResults: false,
  users: [],
  user: null,
};

const searchReducer = (state, action) => {
  if (action.type === 'SHOW_SPINNER') {
    return { ...state, isLoading: true };
  } else if (action.type === 'HIDE_SPINNER') {
    return { ...state, isLoading: false };
  } else if (action.type === 'FETCH_USERS') {
    if (action.payload.users) {
      return { ...state, hasResults: true, user: null, users: action.payload.users };
    } else {
      return defaultState;
    }
  } else if (action.type === 'USER_INFO') {
    return { ...state, isLoading: false, hasResults: false, users: [], user: action.payload.user };
  } else if (action.type === 'CLEAR_RESULTS') {
    return defaultState;
  }

  return defaultState;
};

const SearchContextProvider = (props) => {
  const [searchState, dispatch] = useReducer(searchReducer, defaultState);

  const showSpinnerHandler = () => {
    dispatch({ type: 'SHOW_SPINNER' });
  };

  const hideSpinnerHandler = () => {
    dispatch({ type: 'HIDE_SPINNER' });
  };

  const fetchUsersHandler = (data) => {
    dispatch({ type: 'FETCH_USERS', payload: { users: data } });
  };

  const fetchUserHandler = async (url) => {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  };

  const userInfoHandler = (user) => {
    dispatch({ type: 'USER_INFO', payload: { user } });
  };

  const clearResultsHandler = () => {
    dispatch({ type: 'CLEAR_RESULTS' });
  };

  const searchContext = {
    isLoading: searchState.isLoading,
    hasResults: searchState.hasResults,
    users: searchState.users,
    user: searchState.user,
    fetchUsers: fetchUsersHandler,
    fetchUser: fetchUserHandler,
    getUserInfo: userInfoHandler,
    clearResults: clearResultsHandler,
    showSpinner: showSpinnerHandler,
    hideSpinner: hideSpinnerHandler,
  };

  return <SearchContext.Provider value={searchContext}>{props.children}</SearchContext.Provider>;
};

export default SearchContextProvider;
