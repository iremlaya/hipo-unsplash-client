import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import './DropdownMenu.css';

import { changeCollections } from '../redux/actions/searchActions';

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCollectionTitle, setSelectedCollectionTitle] = useState('');

  const list = [
    { id: 0, title: 'featured' },
    { id: 1, title: 'city' },
    { id: 2, title: 'cool' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isOpen) {
        window.addEventListener('click', setIsOpen(false));
      } else {
        window.removeEventListener('click', setIsOpen(false));
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.removeEventListener('click', setIsOpen(false));
  }, []);

  const selectCollection = (title, id) => {
    setIsOpen(false);
    setSelectedCollectionTitle(title);
    props.handleCollectionChange(id);
  };

  const toggle = () => {
    console.log('pressed');
    setIsOpen(!isOpen);
  };
  const handleKeyDown = (e) => {
    // check keys if you want
    if (e.keyCode === 13) {
      toggle();
    }
  };
  // todo : no anonymous function
  return (
    <div className={`dd-wrapper ${isOpen ? 'dd-open' : ''}`} onClick={toggle} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
      <div className="dd-header">
        {selectedCollectionTitle ? (
          <div className="dd-header-chosen">{selectedCollectionTitle}</div>
        ) : (
          <div className="dd-header-title">Collections</div>
        )}
      </div>
      {isOpen && (
      <ul className="dd-list" onClick={(e) => e.stopPropagation()}>
        {list.map((item) => (
          <li
            className="dd-list-item"
            key={item.id}
            onClick={() => selectCollection(item.title, item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  id: state.search.id,
});

const mapDispatchToProps = (dispatch) => ({
  changeCollections: (id) => dispatch(changeCollections(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
