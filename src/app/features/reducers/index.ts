import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromSearch from './search';
import * as fromVideos from './video';

export interface State {
    search: fromSearch.State;
    videos: fromVideos.State;

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
