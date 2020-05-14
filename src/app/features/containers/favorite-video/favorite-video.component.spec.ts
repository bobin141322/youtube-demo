import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteVideoComponent } from './favorite-video.component';

describe('FavoriteVideoComponent', () => {
  let component: FavoriteVideoComponent;
  let fixture: ComponentFixture<FavoriteVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
