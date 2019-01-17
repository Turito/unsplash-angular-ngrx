import { IGallery } from '../../models/gallery.interface';
import { IPhoto } from '../../models/photo.interface';

export interface IPhotoState {
  gallery: IGallery;
  selectedPhoto: IPhoto;
}

export const initialPhotoState: IPhotoState = {
  gallery: null,
  selectedPhoto: null
};
