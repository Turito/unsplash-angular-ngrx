import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { GetGallerySuccess, EPhotoActions, GetPhotoSuccess, GetPhoto, GetGallery} from '../actions/photo.actions';
import { UnsplashService } from '../../services/unsplash.service';
import { IGallery } from '../../models/gallery.interface';
import { IPhoto } from '../../models/photo.interface';
import { selectGalleryList } from '../selectors/photo.selector';

@Injectable()
export class PhotoEffects {
  @Effect()
  getPhoto$ = this._actions$.pipe(
    ofType<GetPhoto>(EPhotoActions.GetPhoto),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectGalleryList))),
    switchMap(([id, gallery]) => {
      const selectedPhoto = gallery.results.filter(function (photo:IPhoto){
        return (photo.id == id);
      });
      //const selectedPhoto = gallery.results.filter(photo => photo.id ==id)[0];
      return of(new GetPhotoSuccess(selectedPhoto[0]));
    })
  );

  @Effect()
  getPhotos$ = this._actions$.pipe(
    ofType<GetGallery>(EPhotoActions.GetGallery),
    map(action => action.payload),
    switchMap((query) => this._unsplashService.getPhotos(query)),
    switchMap((gallery: IGallery) => of(new GetGallerySuccess(gallery)))
  );

  constructor(
    private _unsplashService: UnsplashService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
