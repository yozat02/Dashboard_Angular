import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloDashboardComponent } from './hello-dashboard.component';

describe('HelloDashboardComponent', () => {
  let component: HelloDashboardComponent;
  let fixture: ComponentFixture<HelloDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
