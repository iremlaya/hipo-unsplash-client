
import React from 'react';
import { connect } from 'react-redux';

import { incrementPage, decrementPage, setPageZero } from '../redux/actions/fetchActions';
import './Navigation.css';

const Navigation = (props) => {
  const onFirstPage = () => props.page === 1;

  const onLastPage = () => props.page === props.totalPages;

  const goToPreviousPage = () => props.decrementPage();
  const goToNextPage = () => props.incrementPage();

  if (props.totalPages === 0 || props.loading) {
    return null;
  }

  return (
    <div className="navigation">

      <button type="button" className={onFirstPage() ? 'button disabled' : 'button'} onClick={goToPreviousPage}>
        Previous
      </button>
      <button type="button" className={onLastPage() ? 'button disabled' : 'button'} onClick={goToNextPage}>
        Next
      </button>
    </div>
  );
};


const mapStateToProps = (state) => ({
  totalPages: state.fetch.data.total_pages,
  loading: state.fetch.loading,
  page: state.fetch.page,
});

const mapDispatchToProps = (dispatch) => ({
  incrementPage: () => dispatch(incrementPage()),
  decrementPage: () => dispatch(decrementPage()),
  setPageZero: () => dispatch(setPageZero()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
