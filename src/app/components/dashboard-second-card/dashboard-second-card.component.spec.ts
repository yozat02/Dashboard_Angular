import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSecondCardComponent } from './dashboard-second-card.component';

describe('DashboardSecondCardComponent', () => {
  let component: DashboardSecondCardComponent;
  let fixture: ComponentFixture<DashboardSecondCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSecondCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSecondCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
