import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { SaveSearchSuccess, ESearchActions, SaveSearch} from '../actions/search.actions';
import { selectQuery } from '../selectors/search.selector';

@Injectable()
export class SearchEffects {

  @Effect()
  saveSearch$ = this._actions$.pipe(
    ofType<SaveSearch>(ESearchActions.SaveSearch),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectQuery))),
    switchMap((query, id) => {
      return of(new SaveSearchSuccess(query[0]))
    }),
/*    switchMap(query => {console.log("Effect 1: " + query);return query;}),
    switchMap((query: string) => {
      console.log("Effect 2: " + query);
      return of(new SaveSearchSuccess(query));
    })*/
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
