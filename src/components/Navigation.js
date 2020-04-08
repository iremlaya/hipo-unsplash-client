
import React from 'react';
import { connect } from 'react-redux';

import { incrementPage, decrementPage, setPageZero } from '../redux/actions/fetchActions';
import './Navigation.css';

const Navigation = (props) => {
  const handleKeyDownPrev = (e) => {
    if (e.keyCode === 13) {
      props.decrementPage();
    }
  };
  const handleKeyDownNext = (e) => {
    if (e.keyCode === 13) {
      props.incrementPage();
    }
  };
  const onFirstPage = () => props.page === 0;

  const onLastPage = () => props.page === props.totalPages - 1;

  if (props.totalPages === 0) {
    return null;
  }

  return (

    <div className="navigation">
      <span
        role="button"
        aria-label="Previous Page"
        tabIndex="-1"
        onKeyDown={handleKeyDownPrev}
        className={onFirstPage ? 'disabled' : 'paginate left'}
        onClick={props.decrementPage()}
      />
      <span
        role="button"
        aria-label="Next Page"
        tabIndex="-2"
        onKeyDown={handleKeyDownNext}
        className={onLastPage ? 'paginate left' : 'paginate right'}
        onClick={props.incrementPage()}
      />
    </div>
  );
};


const mapStateToProps = (state) => ({
  totalPages: state.fetch.data.total_pages,
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
