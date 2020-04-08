/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchPhotosByCollections, setPageZero } from '../redux/actions/fetchActions';

import getFilteredResults from '../redux/selectors/resultSelector';

import Masonry from './Masonry';
import Error from './ErrorStatement';
import NoResult from './NoResult';
import LoadingIndicator from './LoadingIndicator';
import Navigation from './Navigation';
import service from '../services/api/unsplash';

import './MasonryGrid.css';

const MasonryGrid = (props) => {
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
    let { id, input } = props;
    if (!id) {
      id = '0';
    }
    if (!input) {
      input = 'Istanbul';
    }

    await props.fetchPhotosByCollections(input, id, props.page);
  }
  useEffect(() => { setDidMount(true); fetchData(); }, []);

  useEffect(() => {
    props.setPageZero(); // resetPage
    fetchData();
  }, [props.input, props.id]);
  /*
  useEffect(() => {
    if (didMount) {
      console.log('page', props.page);
      props.fetchPhotosByCollections(props.input, props.id, props.page);
    }
  }, [props.page]);
*/
  useEffect(() => {
    fetchData();
  }, [props.page]);

  const renderData = () => {
    if (props.loading) {
      return <LoadingIndicator />;
    }
    if (props.error) {
      return <Error />;
    }
    if (props.data && props.data.length !== 0) {
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
  setPageZero: () => dispatch(setPageZero()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasonryGrid);
