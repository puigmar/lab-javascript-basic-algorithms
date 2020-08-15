import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSongComponent } from './track-song.component';

describe('TrackSongComponent', () => {
  let component: TrackSongComponent;
  let fixture: ComponentFixture<TrackSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
