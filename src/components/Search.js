import { useContext } from 'react';
import SearchForm from './SearchForm';
import SearchContext from '../store/search-context';

const Search = () => {
  const ctx = useContext(SearchContext);

  const clearResultsHandler = () => {
    ctx.clearResults();
  };

  return (
    <section className="section__search">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 form-row">
            <SearchForm />
            {ctx.hasResults || ctx.user ? (
              <div className="d-grid">
                <button
                  type="button"
                  className="btn btn-block btn-secondary"
                  id="clear-results"
                  onClick={clearResultsHandler}
                >
                  Clear
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
