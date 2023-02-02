import React from 'react';

const SearchContext = React.createContext({
  isLoading: false,
  hasResults: false,
  users: [],
  user: null,
  fetchUsers: (users) => {},
  fetchUser: async (user) => {},
  getUserInfo: (user) => {},
  clearResults: () => {},
  showSpinner: () => {},
  hideSpinner: () => {},
});

export default SearchContext;
