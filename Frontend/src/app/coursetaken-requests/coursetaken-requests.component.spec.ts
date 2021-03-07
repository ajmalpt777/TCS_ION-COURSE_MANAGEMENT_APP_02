import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursetakenRequestsComponent } from './coursetaken-requests.component';

describe('CoursetakenRequestsComponent', () => {
  let component: CoursetakenRequestsComponent;
  let fixture: ComponentFixture<CoursetakenRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursetakenRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursetakenRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
