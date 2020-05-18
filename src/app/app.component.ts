import { Component } from '@angular/core';
import * as action from './features/actions/video';
import * as fromRoot from './features/reducers/index';
import { Video } from './features/models/video';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-app';
  constructor(
    private store: Store<fromRoot.State>) {
    store.dispatch(new action.SearchAction('kid'));
    //this.video$ = store.pipe(select(fromRoot.getSearchResults));
  }

}
