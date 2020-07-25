import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastInsightCardComponent } from './last-insight-card.component';

describe('LastInsightCardComponent', () => {
  let component: LastInsightCardComponent;
  let fixture: ComponentFixture<LastInsightCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastInsightCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastInsightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
