import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursetakenDetailsComponent } from './coursetaken-details.component';

describe('CoursetakenDetailsComponent', () => {
  let component: CoursetakenDetailsComponent;
  let fixture: ComponentFixture<CoursetakenDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursetakenDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursetakenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
