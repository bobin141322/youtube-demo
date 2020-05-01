import { Component, OnInit, Input } from '@angular/core';
//import { FormatTextPipe } from '../../../shared/pipe/format-text.pipe';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
