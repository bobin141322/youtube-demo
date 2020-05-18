import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
  @Input() item: any;
  @Input() hiddenBtn: any;
  @Output() openVideoDetail = new EventEmitter<any>();
  @Output() addFavorite = new EventEmitter<any>();
  @Output() removeFavorite = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  addCollection(event) {
    this.addFavorite.emit(event);
  }
  removeCollection(event) {
    this.removeFavorite.emit(event);
  }
}
