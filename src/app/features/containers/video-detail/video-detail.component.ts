import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as action from '../../actions/video';
import * as fromRoot from '../../reducers/index';
import { Video } from '../../models/video';


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit {
  public id: string;
  public url: any;
  public video$: Observable<Video>;
  constructor(private route: ActivatedRoute, private router: Router, private sanitize: DomSanitizer, private store: Store) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');
    // this.videoURL();
    // this.getDetailVideo();
    this.video$ = this.store.pipe(select(fromRoot.getCurrentVideo));
    //this.video$ =  this.store.pipe(select(fromRoot.getSearchResults));
  }

  videoURL() {
    this.url = `https://www.youtube.com/embed/${this.id}?autoplay=1`;
  }

  getDetailVideo(){
     // this.video$ = this.store.pipe(select(fromRoot.getCurrentVideo));
  }
}
