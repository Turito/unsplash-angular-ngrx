import { Action } from '@ngrx/store';

import { IGallery } from '../../models/gallery.interface';
import { IPhoto } from '../../models/photo.interface';

export enum EPhotoActions {
  GetGallery = '[Gallery] Get Photos',
  GetGallerySuccess = '[Gallery] Get Photos Success',
  GetPhoto = '[Photo] Get Photo',
  GetPhotoSuccess = '[Photo] Get Photo Success'
}

export class GetGallery implements Action {
  public readonly type = EPhotoActions.GetGallery;
  constructor(public payload: string){}
}

export class GetGallerySuccess implements Action {
  public readonly type = EPhotoActions.GetGallerySuccess;
  constructor(public payload: IGallery) {}
}

export class GetPhoto implements Action {
  public readonly type = EPhotoActions.GetPhoto;
  constructor(public payload: number) {}
}

export class GetPhotoSuccess implements Action {
  public readonly type = EPhotoActions.GetPhotoSuccess;
  constructor(public payload: IPhoto) {}
}

export type PhotoActions = GetGallery | GetGallerySuccess | GetPhoto | GetPhotoSuccess;
