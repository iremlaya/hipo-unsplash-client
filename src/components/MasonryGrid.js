
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchPhotosByCollections, fetchPhotos } from '../redux/actions/fetchActions';

import { getFilteredResults } from '../redux/selectors/resultSelector';
import Masonry from './Masonry';
import './MasonryGrid.css';

const MasonryGrid = (props) => {
  const [page, setPage] = useState(0);
  const dummy = [
    {
      id: '0n0AHB1fgTQ',
      urls:
      {
        raw: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        full: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        regular: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        small: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        thumb: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
      },
      links: 'https://unsplash.com/photos/0n0AHB1fgTQ',
    },
    {
      id: '0n0AHB1fgTQ',
      urls:
      {
        raw: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        full: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        regular: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        small: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        thumb: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
      },
      links: 'https://unsplash.com/photos/0n0AHB1fgTQ',
    }, {
      id: 'kNSREmtaGOE',
      urls:
      {
        raw: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        full: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        regular: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        small: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        thumb: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
      },
      links: 'https://unsplash.com/photos/kNSREmtaGOE',
    }, {
      id: '0n0AHB1fgTQ',
      urls:
      {
        raw: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        full: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        regular: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        small: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        thumb: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
      },
      links: 'https://unsplash.com/photos/0n0AHB1fgTQ',
    },
    {
      id: 'kNSREmtaGOE',
      urls:
      {
        raw: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        full: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        regular: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        small: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        thumb: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
      },
      links: 'https://unsplash.com/photos/kNSREmtaGOE',
    }, {
      id: '0n0AHB1fgTQ',
      urls:
      {
        raw: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        full: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        regular: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        small: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        thumb: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
      },
      links: 'https://unsplash.com/photos/0n0AHB1fgTQ',
    }, {
      id: 'kNSREmtaGOE',
      urls:
      {
        raw: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        full: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        regular: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        small: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        thumb: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
      },
      links: 'https://unsplash.com/photos/kNSREmtaGOE',
    }, {
      id: '0n0AHB1fgTQ',
      urls:
      {
        raw: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        full: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        regular: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        small: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        thumb: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
      },
      links: 'https://unsplash.com/photos/0n0AHB1fgTQ',
    }, {
      id: 'kNSREmtaGOE',
      urls:
      {
        raw: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        full: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        regular: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        small: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
        thumb: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyNDg5OX0',
      },
      links: 'https://unsplash.com/photos/kNSREmtaGOE',
    },

  ];

  useEffect(() => {
    async function fetchData() {
      // You can await here
      setPage(0); // resetPage
      let ids = props.collectionIds;
      if (!ids) {
        ids = '0';
      }
      await props.fetchPhotos('istanbul', '0', page);
    }
    fetchData().then(console.log(props.data));
  }, [props.input]);

  useEffect(() => {
    async function fetchData() {
      let ids = props.collectionIds;
      if (!ids) {
        ids = '0';
      }
      await props.fetchPhotos('istanbul', '0', page);
    }
    // fetchData();
  }, [page]);

  const incrementPage = () => {
    setPage(page + 1);
  };

  const resetPage = () => {
    setPage(0);
  };

  const renderColumns = () => {
    const { column, columnAttrs = {}, columnClassName } = this.props;
    const childrenInColumns = this.itemsInColumns();
    const columnWidth = `${100 / childrenInColumns.length}%`;
    let className = columnClassName;

    if (typeof className !== 'string') {
      this.logDeprecated('The property "columnClassName" requires a string');

      // This is a deprecated default and will be removed soon.
      if (typeof className === 'undefined') {
        className = 'my-masonry-grid_column';
      }
    }
  };

  return (
    <div className="masonry-grid-container">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {dummy.map((item) => <div key={item.id}><img src={item.urls.small} /></div>)}
      </Masonry>
    </div>

  );
};


const mapStateToProps = (state) => ({
  loading: state.fetch.loading,
  data: getFilteredResults(state),
  error: state.fetch.error,
  clickedPhoto: state.fetch.clickedPhoto,
  input: state.search.input,
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
