import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as action from '../../actions/video';
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
  constructor(private youtube: YoutubeService, store: Store<fromRoot.State>) {
    store.dispatch(new action.SearchAction('kid'));
    this.video$ =  store.select(fromRoot.getSearchResults);
    //this.video$ = store.
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

  getChannels(){
    const channelId = 'UUhTMiw43iw4w-ggOEXmPtfg';
    this.youtube.getChannel(channelId).then(res => {
      console.log(res);
    });
  }

  getSearch(){
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
}
