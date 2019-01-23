import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ISearchState } from '../state/search.state';

const query = (state: IAppState) => state.search;

export const selectQuery = createSelector(
    query,
    (state: ISearchState) => state.query
);