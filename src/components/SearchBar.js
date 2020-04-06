import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { changeInput, changeCollections } from '../redux/actions/searchActions';

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('');
  const [searchCollection, setSearchCollection] = useState('');

  useEffect(() => {
  }, [searchText, searchCollection]);

  const handleInputChange = (e) => {
    setSearchText(e.currentTarget.value);
  };

  const handleCollectionChange = (e) => {
    setSearchCollection(e.currentTarget.value);
  };
  const handleSubmit = () => {
    changeInput(searchText);
    changeCollections(searchCollection);
  };

  return (
    <div>
      <input
        placeholder="Test Numero Dos"
        className="search-input-box"
        onChange={handleInputChange}
        value={searchText}
      />
      <input
        placeholder="Test Numero Trés"
        className="search-input-box"
        onChange={handleCollectionChange}
        value={searchCollection}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};


const mapStateToProps = (state) =>
  // console.log(state);
  ({
    input: state.search.input,
    id: state.search.id,
  });
const mapDispatchToProps = (dispatch) => ({
  changeInput: (input) => dispatch(changeInput(input)),
  changeCollections: (id) => dispatch(changeCollections(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
