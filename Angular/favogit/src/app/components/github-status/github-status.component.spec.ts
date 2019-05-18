import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubStatusComponent } from './github-status.component';

describe('GithubStatusComponent', () => {
  let component: GithubStatusComponent;
  let fixture: ComponentFixture<GithubStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
