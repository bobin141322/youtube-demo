import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';

import * as collection from '../actions/collection';
import { Video } from '../models/video';


@Injectable()
export class CollectionEffects {
    constructor(private actions$: Actions, private db: Database) { }

    @Effect({ dispatch: false })
    openDB$: Observable<any> = defer(() => {
      return this.db.open('video_app');
    });

    @Effect()
  loadCollection$: Observable<Action> = this.actions$.pipe(
    ofType(collection.LOAD))
    .startWith(new collection.LoadAction())
    .switchMap(() =>
      this.db.query('videos')
        .toArray()
        .map((videos: Video[]) => new collection.LoadSuccessAction(videos))
        .catch(error => of(new collection.LoadFailAction(error)))
    );

    @Effect()
  addBookToCollection$: Observable<Action> = this.actions$.pipe
    (ofType(collection.ADD_VIDEO))
    .map((action: collection.AddVideoAction) => action.payload)
    .mergeMap(video =>
      this.db.insert('videos', [ video ])
        .map(() => new collection.AddVideoSuccess(video))
        .catch(() => of(new collection.AddVideoFail(video)))
    );

}
