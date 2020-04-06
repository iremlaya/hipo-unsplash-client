import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-fontawesome';
import './DropdownMenu.css';

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCollectionTitle, setSelectedCollectionTitle] = useState('');

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


  const updateCollectionState = (id) => {
    props.changeCollections(id);
  };

  const selectCollection = (title, id, stateKey) => {
    setIsOpen(false);
    setSelectedCollectionTitle(title);
    updateCollectionState(id);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dd-wrapper">
      <div className="dd-header" onClick={() => toggle}>
        {selectedCollectionTitle ? (
          <div className="dd-header-chosen">{selectedCollectionTitle}</div>
        ) : (
          <div className="dd-header-title">Collections</div>
        )}

        {isOpen ? (
          <FontAwesome name="angle-up" size="2x" />
        ) : (
          <FontAwesome name="angle-down" size="2x" />
        )}
      </div>
      {isOpen && (
      <ul className="dd-list" onClick={(e) => e.stopPropagation()}>
        {list.map((item) => (
          <li
            className="dd-list-item"
            key={item.id}
            onClick={() => selectCollection(item.title, item.id, item.key)}
          >
            {item.title}
            {' '}
            {item.selected && <FontAwesome name="check" />}
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default Dropdown;
