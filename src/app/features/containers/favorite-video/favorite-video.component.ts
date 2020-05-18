import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../reducers';
import { Video } from '../../models/video';
import * as collection from '../../actions/collection';

@Component({
  selector: 'app-favorite-video',
  templateUrl: './favorite-video.component.html',
  styleUrls: ['./favorite-video.component.scss']
})
export class FavoriteVideoComponent implements OnInit {
  videos$: Observable<Video[]>;
  constructor(private store: Store<fromRoot.State>) {
    this.videos$ = store.pipe(select(fromRoot.getVideoCollection));
  }

  ngOnInit(): void {
  }

  removeFavorite(event) {
    this.store.dispatch(new collection.RemoveVideoAction(event));
  }

}
