import { RouterReducerState } from '@ngrx/router-store';

import { IPhotoState, initialPhotoState } from './photo.state';


export interface IAppState {
  router?: RouterReducerState;
  gallery: IPhotoState;
}

export const initialAppState: IAppState = {
  gallery: initialPhotoState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
