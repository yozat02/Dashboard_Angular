import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFirstCardComponent } from './dashboard-first-card.component';

describe('DashboardFirstCardComponent', () => {
  let component: DashboardFirstCardComponent;
  let fixture: ComponentFixture<DashboardFirstCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFirstCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFirstCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
