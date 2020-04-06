
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPhotosByCollections, fetchPhotos } from '../redux/actions/fetchActions';

const MasonryGrid = (props) => {
  useEffect(() => {
    console.log(props);
    let ids = props.collectionIds;
    if (!ids) {
      ids = '0';
    }
    fetchPhotosByCollections(props.input, ids);
    // console.log(props);
  }, []);

  return (
    <div>
      <p>
        hi
      </p>
    </div>
  );
};


const mapStateToProps = (state) => ({
  loading: state.fetch.loading,
  data: state.fetch.data,
  error: state.fetch.error,
  clickedPhoto: state.fetch.clickedPhoto,
});

const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line max-len
  fetchPhotosByCollections: (input, collectionIds) => dispatch(fetchPhotosByCollections(input, collectionIds)),
  fetchPhotos: (input) => dispatch(fetchPhotos(input)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasonryGrid);
