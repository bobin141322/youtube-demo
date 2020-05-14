import * as collection from '../actions/collection';


export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  ids: []
};

export function reducer(state = initialState, action: collection.Actions): State {
  switch (action.type) {
    case collection.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case collection.LOAD_SUCCESS: {
      const videos = action.payload;

      return {
        loaded: true,
        loading: false,
        ids: videos.map(video => video.id.videoId)
      };
    }

    case collection.ADD_VIDEO_SUCCESS: {
   // case collection.REMOVE_BOOK_FAIL: {
      const video = action.payload;

      if (state.ids.indexOf(video.id.videoId) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        ids: [ ...state.ids, video.id.videoId ]
      });
    }

    //case collection.REMOVE_VIDEO_SUCCESS:
    case collection.ADD_VIDEO_FAIL: {
      const video = action.payload;

      return Object.assign({}, state, {
        ids: state.ids.filter(id => id !== video.id.videoId)
      });
    }

    default: {
      return state;
    }
  }
}


export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
