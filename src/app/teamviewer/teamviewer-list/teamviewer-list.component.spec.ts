import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamviewerListComponent } from './teamviewer-list.component';

describe('TeamviewerListComponent', () => {
  let component: TeamviewerListComponent;
  let fixture: ComponentFixture<TeamviewerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamviewerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamviewerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
