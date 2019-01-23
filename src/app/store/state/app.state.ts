import { RouterReducerState } from '@ngrx/router-store';

import { IPhotoState, initialPhotoState } from './photo.state';
import { ISearchState, initialSearchState } from './search.state';


export interface IAppState {
  router?: RouterReducerState;
  gallery: IPhotoState;
  search: ISearchState;
}

export const initialAppState: IAppState = {
  gallery: initialPhotoState,
  search: initialSearchState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
