import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, Observable} from 'rxjs';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;
  term = '';
  searchTextChanged = new Subject<string>();
  subscription: any;
  constructor( private route: ActivatedRoute, private router: Router) { 
    this.subscription = this.searchTextChanged
        .debounceTime(1000)
        .distinctUntilChanged()
        .subscribe(() => {
          this.router.navigate(['/features/video-list', { search: this.term  }]);
        });
  }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  
  search() {
    this.searchTextChanged.next(this.term);
  }
}
