import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import {
    StoreRouterConnectingModule,
    routerReducer,
    RouterReducerState,
    RouterStateSerializer
} from '@ngrx/router-store';

import { Params, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface State {
    router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route = routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        const {
            url,
            root: { queryParams }
        } = routerState;
        const { params } = route;

        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url, params, queryParams };
    }

}
    // Reducer selectors
export const selectReducerState = createFeatureSelector<
    RouterReducerState<RouterStateUrl>>('router');

export const getRouterInfo = createSelector(
    selectReducerState,
    state => state.state
);
