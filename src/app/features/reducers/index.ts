import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import * as fromSearch from './search';
import * as fromVideos from './video';
import { environment } from '../../../environments/environment';
import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

export interface State {
    search: fromSearch.State;
    videos: fromVideos.State;

}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

const reducers = {
    search: fromSearch.reducer,
    videos: fromVideos.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export const getVideosState = (state: State) => state.videos;
export const getSearchState = (state: State) => state.search;

export const getBookEntities = createSelector(getVideosState, fromVideos.getEntities);
export const getBookIds = createSelector(getVideosState, fromVideos.getIds);
export const getSelectedVideoId = createSelector(getVideosState, fromVideos.getSelectedId);
export const getSelectedBook = createSelector(getVideosState, fromVideos.getSelected);

export const getSearchVideoIds = createSelector(getSearchState, fromSearch.getIds);
export const getSearchQuery = createSelector(getSearchState, fromSearch.getQuery);
export const getSearchLoading = createSelector(getSearchState, fromSearch.getLoading);

export const getSearchResults = createSelector(getBookEntities, getSearchVideoIds, (videos, searchIds) => {
    return searchIds.map(id => videos[id]);
});
