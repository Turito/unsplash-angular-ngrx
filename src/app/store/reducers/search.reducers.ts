import { ESearchActions, SearchActions } from './../actions/search.actions';
import { initialSearchState, ISearchState } from '../state/search.state';

export const searchReducers = (
  state = initialSearchState,
  action: SearchActions
): ISearchState => {
  switch (action.type) {
    case ESearchActions.SaveSearchSuccess: {
      return {
        ...state,
        query: action.payload
      };
    }

    default:
      return state;
  }
};
