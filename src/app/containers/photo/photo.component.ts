import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { IAppState } from '../../store/state/app.state';
import { selectSelectedPhoto } from '../../store/selectors/photo.selector';
import { GetPhoto } from '../../store/actions/photo.actions';

import { Router } from '@angular/router';

@Component({
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photo$ = this._store.pipe(select(selectSelectedPhoto));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._store.dispatch(new GetPhoto(this._route.snapshot.params.id));
  }

  goTo(url:string) {
    this._router.navigate(['gallery']);
  }
}
