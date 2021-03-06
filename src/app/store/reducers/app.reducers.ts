import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { photoReducers } from './photo.reducers';
import { searchReducers } from './search.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  gallery: photoReducers,
  search: searchReducers
};
