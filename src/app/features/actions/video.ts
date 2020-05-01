import { Action } from '@ngrx/store';
import { Video } from '../models/video';

export const SEARCH = '[Book] Search';
export const SEARCH_COMPLETE = '[Book] Search Complete';

export class SearchAction implements Action {
    readonly type = SEARCH;

    constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
    readonly type = SEARCH_COMPLETE;

    constructor(public payload: Video[]) { }
}

export type Actions
    = SearchAction
    | SearchCompleteAction;
