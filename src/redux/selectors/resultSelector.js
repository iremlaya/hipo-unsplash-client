import { createSelector } from 'reselect';

const getResults = (state) => state.fetch.data.results || [];

const getFilteredResults = createSelector(
  [getResults],
  (results) => {
    const filtered = [];
    if (results) {
      results.forEach((element) => {
        filtered.push({
          id: element.id,
          url: element.urls.small,
          link: element.links.html,
        });
      });
    }
    return filtered;
  },
);

export default getFilteredResults;
