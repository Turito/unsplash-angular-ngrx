import { Action } from '@ngrx/store';

export enum ESearchActions {
  SaveSearch = '[Search] Save Search',
  SaveSearchSuccess = '[Save] Save Search Success',
}

export class SaveSearch implements Action {
  public readonly type = ESearchActions.SaveSearch;
  constructor(public payload: string){}
}

export class SaveSearchSuccess implements Action {
  public readonly type = ESearchActions.SaveSearchSuccess;
  constructor(public payload: string) {}
}

export type SearchActions = SaveSearch | SaveSearchSuccess;
