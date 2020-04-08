import createCachedSelector, { LruMapCache } from 're-reselect';
import service from '../../services/api/unsplash';

function keySelectorCombiner({ inputSelectors = [] } = {}) {
  const keySelectors = inputSelectors
    .map((entry) => entry.keySelector)
    .filter((keySelector) => typeof keySelector === 'function');

  // The actual keySelector
  return (...args) => keySelectors
    .map((keySelector) => keySelector(...args))
    .filter((value) => {
      const valueType = typeof value;
      return valueType === 'string' || valueType === 'number';
    })
    .join(':');
}

const keySelector1 = (input) => input;
const keySelector2 = (collectionIds) => collectionIds;

const keySelector = keySelectorCombiner(keySelector1, keySelector2);

const cachedSelector = createCachedSelector(
  (input) => input,
  (collectionIds) => collectionIds,
  (page) => page,
  // Return and retain a Promise as a result
  (input, collectionIds, page) => service.searchPhotosByCollections(input, collectionIds, page),
)({
  /*
     * Re-reselect resolver function.
     * Cache a new selector for each new parameter
     */
  keySelector,
  cacheObject: new LruMapCache({ cacheSize: 5 }),
  // or:
  // cacheObject: new LruMapCache({cacheSize: 5}),
});
export default cachedSelector;
