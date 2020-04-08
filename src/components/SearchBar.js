import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import { connect } from 'react-redux';

import { changeInput, changeCollections } from '../redux/actions/searchActions';
import Dropdown from './DropdownMenu';

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('');
  const [searchCollection, setSearchCollection] = useState('');

  useEffect(() => {}, [searchText, searchCollection]);

  const handleInputChange = (e) => {
    setSearchText(e.currentTarget.value);
  };

  const handleCollectionChange = (id) => {
    setSearchCollection(id);
  };

  const handleSubmit = () => {
    console.log('handle submit:', searchCollection);
    props.changeInput(searchText);
    props.changeCollections(searchCollection);
  };

  return (
    <div className="header">
      <div className="header-content">
        <span className="logo" />
        <div className="input-fields">
          <input
            className="text-input"
            placeholder="Query"
            onChange={handleInputChange}
            value={searchText}
          />
          <Dropdown handleCollectionChange={handleCollectionChange} />
        </div>
        <button className="search-button" onClick={handleSubmit} type="button">
          SEARCH
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  input: state.search.input,
  id: state.search.id,
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: (input) => dispatch(changeInput(input)),
  changeCollections: (id) => dispatch(changeCollections(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
