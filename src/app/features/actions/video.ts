import { Action } from '@ngrx/store';
import { Video } from '../models/video';

export const SEARCH = '[Video] Search';
export const SEARCH_COMPLETE = '[Video] Search Complete';
export const LOAD = '[Video] Load';

export class SearchAction implements Action {
    readonly type = SEARCH;

    constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
    readonly type = SEARCH_COMPLETE;

    constructor(public payload: Video[]) { }
}

export class LoadAction implements Action {
    readonly type = LOAD;
    constructor(public payload: Video) { }
}

export type Actions
    = SearchAction | SearchCompleteAction | LoadAction;
    