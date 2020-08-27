import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitProjectComponent } from './git-project.component';

describe('GitProjectComponent', () => {
  let component: GitProjectComponent;
  let fixture: ComponentFixture<GitProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
