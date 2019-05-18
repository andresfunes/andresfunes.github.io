import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubForkmeComponent } from './github-forkme.component';

describe('GithubForkmeComponent', () => {
  let component: GithubForkmeComponent;
  let fixture: ComponentFixture<GithubForkmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubForkmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubForkmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
