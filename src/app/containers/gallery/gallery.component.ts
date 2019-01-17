import { GetGallery } from './../../store/actions/photo.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { selectGalleryList } from '../../store/selectors/photo.selector';

import { Router } from '@angular/router';

@Component({
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  photos$ = this._store.pipe(select(selectGalleryList));

  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {
    this._store.dispatch(new GetGallery('dogs'));
  }

  searchGallery(query: string){
    this._store.dispatch(new GetGallery(query));
  }

  viewPhoto(id: number) {
    this._router.navigate(['photo', id]);
  }
}
