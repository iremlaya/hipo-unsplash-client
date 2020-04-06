import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { changeInput, changeCollections } from '../redux/actions/searchActions';

const SearchBar = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
      <p>
        search
      </p>
    </div>
  );
};


const mapStateToProps = (state) => {
  console.log(state);
  return {
    input: state.search.input,
    id: state.search.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeInput: (input) => dispatch(changeInput(input)),
  changeCollections: (id) => dispatch(changeCollections(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
