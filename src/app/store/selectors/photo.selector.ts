import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IPhotoState } from '../state/photo.state';

const selectPhotos = (state: IAppState) => state.gallery;

export const selectGalleryList = createSelector(
    selectPhotos,
  (state: IPhotoState) => state.gallery
);

export const selectSelectedPhoto = createSelector(
    selectPhotos,
  (state: IPhotoState) => state.selectedPhoto
);
