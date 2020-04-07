import { createStructuredSelector } from 'reselect';

const getResults = (state) => state.fetch.data;

export const getFilteredResults = createStructuredSelector(
  [getResults],
  (results) => {
    const filteredResults = [];

    console.log(results);
    results.results.forEach((element) => {
      filteredResults.push({
        id: element.id,
        url: element.urls.small,
        link: element.links.html,
      });
    });
    return filteredResults;
  },
);

export default getFilteredResults;
