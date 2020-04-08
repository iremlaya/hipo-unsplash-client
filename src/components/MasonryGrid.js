/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchPhotosByCollections } from '../redux/actions/fetchActions';

import getFilteredResults from '../redux/selectors/resultSelector';
import selector from '../redux/selectors/cacheSelector';

import Masonry from './Masonry';
import Error from './ErrorStatement';
import NoResult from './NoResult';
import LoadingIndicator from './LoadingIndicator';
import Navigation from './Navigation';

import './MasonryGrid.css';

const MasonryGrid = (props) => {
  const [page, setPage] = useState(0);
  const [didMount, setDidMount] = useState(false);
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

  async function fetchData() {
    // You can await here
    setPage(0); // resetPage
    let ids = props.id;
    if (!ids) {
      ids = '0';
    }
    await props.fetchPhotosByCollections(props.input, ids, page);
  }

  useEffect(() => setDidMount(true), []);

  useEffect(() => {
    fetchData();
  }, [props.input, props.id]);

  useEffect(() => {
    if (didMount) {
      console.log('page');
      fetchData();
    }
  }, [page]);

  const incrementPage = () => {
    setPage(page + 1);
  };

  const resetPage = () => {
    setPage(0);
  };
  const renderData = () => {
    if (props.loading) {
      return <LoadingIndicator />;
    }
    if (props.error || props.input === '') {
      return <Error />;
    }
    if (props.data && props.data.length !== 0) {
      console.log(props.data);
      return (
        <div className="masonry-grid-container">
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {props.data.map((item) => (
              <div key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.url} />
                </a>
              </div>
            ))}
          </Masonry>
        </div>
      );
    }

    return <NoResult />;
  };

  return (
    <div>
      {renderData()}
      <Navigation />
    </div>


  );
};


const mapStateToProps = (state) => ({
  loading: state.fetch.loading,
  data: getFilteredResults(state),
  error: state.fetch.error,
  totalPages: state.fetch.data.total_pages,
  page: state.fetch.page,
  input: state.search.input,
  id: state.search.id,
});

const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line max-len
  fetchPhotosByCollections: (input, collectionIds, page) => dispatch(fetchPhotosByCollections(input, collectionIds, page)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasonryGrid);
