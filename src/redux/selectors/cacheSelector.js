import createCachedSelector from 're-reselect';
import service from '../../services/api/unsplash';

const cachedSelector = createCachedSelector(
  (input) => input,
  // Return and retain a Promise as a result
  (input, collectionIds, page) => service.searchPhotosByCollections(input, collectionIds, page),
)(
  /*
     * Re-reselect resolver function.
     * Cache a new selector for each new parameter
     */
  (input) => input,
);
export default cachedSelector;
