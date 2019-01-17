import { EPhotoActions, PhotoActions } from './../actions/photo.actions';
import { initialPhotoState, IPhotoState } from '../state/photo.state';

export const photoReducers = (
  state = initialPhotoState,
  action: PhotoActions
): IPhotoState => {
  switch (action.type) {
    case EPhotoActions.GetGallerySuccess: {
      return {
        ...state,
        gallery: action.payload
      };
    }
    case EPhotoActions.GetPhotoSuccess: {
      return {
        ...state,
        selectedPhoto: action.payload
      };
    }

    default:
      return state;
  }
};
