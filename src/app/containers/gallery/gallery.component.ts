import { GetGallery } from './../../store/actions/photo.actions';
import { SaveSearch } from './../../store/actions/search.actions';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { selectGalleryList } from '../../store/selectors/photo.selector';
import { selectQuery } from '../../store/selectors/search.selector';

import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  photos$ = this._store.pipe(select(selectGalleryList));
  query$ = this._store.pipe(select(selectQuery));

  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {
    //this._store.dispatch(new GetGallery('dogs'));
  }

  searchGallery(query: string){
    if(query !== ''){
      this._store.dispatch(new SaveSearch(query));
      this._store.dispatch(new GetGallery(query));
    }
  }

  viewPhoto(id: number) {
    this._router.navigate(['photo', id]);
  }
}
