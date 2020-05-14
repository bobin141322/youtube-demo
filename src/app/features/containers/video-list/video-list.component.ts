import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { YoutubeService } from '../../services/youtube.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as action from '../../actions/video';
import * as collection from '../../actions/collection';
import * as fromRoot from '../../reducers/index';
import { Video } from '../../models/video';



@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  video$: Observable<Video[]>;
  videoList: [any];
  constructor(
    private youtube: YoutubeService,
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute, private router: Router) {
   // store.dispatch(new action.SearchAction('kid'));
    //this.video$ = store.pipe(select(fromRoot.getSearchResults));
  }

  ngOnInit(): void {
    //this.getCategories();
    //this.getChannels();
    //this.getSearch();
  }

  getCategories() {
    this.youtube.categories().then(catData => {
      console.log(catData);
      //this.converFilterObject(catData);
      //this.getCategoriesVideos(this.globals.currentCategory);
    });
  }

  getChannels() {
    const channelId = 'UUhTMiw43iw4w-ggOEXmPtfg';
    this.youtube.getChannel(channelId).then(res => {
      console.log(res);
    });
  }

  getSearch() {
    // const query = 'kid';
    // this.youtube.searchVideo(query).then(res => {
    //   let data = JSON.parse(JSON.stringify(res));
    //   // data = data.items.map( res => {
    //   //   res.items.videoId = res.videoId;
    //   //   return res;
    //   // });
    //   this.videoList = data.items;
    // });
  }

  openVideoDetail(event) {
    this.router.navigate(['/video-detail', { queryParams: { id: event.id.videoId } }]);
  }

  addFavorite(event) {
    this.store.dispatch(new collection.AddVideoAction(event));
  }
}
