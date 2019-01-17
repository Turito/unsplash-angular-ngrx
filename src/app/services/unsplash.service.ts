import { Injectable } from '@angular/core';
import { IGallery } from '../models/gallery.interface';
import { IPhoto } from '../models/photo.interface';
import { environment } from '../../environments/environment';
import Unsplash, {toJson} from 'unsplash-js';
import { Observable, from, throwError } from "rxjs";

@Injectable()
export class UnsplashService {

  private unsplash;

  constructor() {
    this.unsplash = new Unsplash({
      applicationId: environment.unsplash.appId,
      secret: environment.unsplash.secretKey,
      callbackUrl: environment.unsplash.callback
    });
  }

  getPhotos(query:string): Observable<IGallery> {
    return from(this.unsplash.search.collections(query, 1).then(toJson));
  }

  getPhoto( id:string, width:number, height:number ): Observable<IPhoto> {
    return from(this.unsplash.photos.getPhoto(id, width, height, [0, 0, width, height]).then(toJson));
  }
}
