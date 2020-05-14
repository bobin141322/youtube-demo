import { Action } from '@ngrx/store';
import { Video } from '../models/video';

export const ADD_VIDEO = '[Collection] Add Video';
export const ADD_VIDEO_SUCCESS = '[Collection] Add Video Success';
export const ADD_VIDEO_FAIL = '[Collection] Add Video Fail';
export const LOAD = '[Collection] Load';
export const LOAD_SUCCESS = '[Collection] Load Success';
export const LOAD_FAIL = '[Collection] Load Fail';

export class AddVideoAction implements Action {
    readonly type = ADD_VIDEO;

    constructor(public payload: Video) { }
}

export class AddVideoSuccess implements Action {
    readonly type = ADD_VIDEO_SUCCESS;
    constructor(public payload: Video) {

    }
}

export class AddVideoFail implements Action {
    readonly type = ADD_VIDEO_FAIL;
    constructor(public payload: Video) { }
}

/**
 * Load Collection Actions
 */
export class LoadAction implements Action {
    readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Video[]) { }
}

export class LoadFailAction implements Action {
    readonly type = LOAD_FAIL;

    constructor(public payload: any) { }
}

export type Actions
= AddVideoAction
|AddVideoSuccess
|AddVideoFail
|LoadAction
|LoadSuccessAction
|LoadFailAction;
