import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderManagementCardComponent } from './under-management-card.component';

describe('UnderManagementCardComponent', () => {
  let component: UnderManagementCardComponent;
  let fixture: ComponentFixture<UnderManagementCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderManagementCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderManagementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
