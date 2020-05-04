
import { Video } from '../models/video';
import * as video from '../actions/video';
import { createSelector } from 'reselect';

export class State {
    ids: string[];
    entities: { [id: string]: Video };
    selectedVideoId: string | null;
}

export const initialState: State = {
    ids: [],
    entities: {},
    selectedVideoId: null
};


export function reducer(state = initialState, action: video.Actions): State {
    switch (action.type) {
        case video.SEARCH_COMPLETE:
            const videos = action.payload;
            const newVideos = videos.filter(video => !state.entities[video.id.videoId]);

            const newVideoIds = newVideos.map(video => video.id.videoId);
            const newVideoEntities = newVideos.reduce((entities: { [id: string]: Video }, video: Video) => {
                return Object.assign(entities, {
                    [video.id.videoId]: video
                });
            }, {});

            return {
                ids: [...state.ids, ...newVideoIds],
                entities: Object.assign({}, state.entities, newVideoEntities),
                selectedVideoId: state.selectedVideoId
            };

        case video.LOAD: {
            const video = action.payload;

            if (state.ids.indexOf(video.id.videoId) > -1) {
                return state;
            }

            return {
                ids: [...state.ids, video.id.videoId],
                entities: Object.assign({}, state.entities, {
                    [video.id.videoId]: video
                }),
                selectedVideoId: state.selectedVideoId
            };
        }

        // case video.SELECT: {
        //     return {
        //         ids: state.ids,
        //         entities: state.entities,
        //         selectedVideoId: action.payload
        //     };
        // }

        default: {
            return state;
        }
    }
}
export const getIds = (state: State) => state.ids;
export const getSelectedId = (state: State) => state.selectedVideoId;
export const getEntities = (state: State) => state.entities;

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});
export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    return entities[selectedId];
});

