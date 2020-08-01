import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioModelsComponent } from './portfolio-models.component';

describe('PortfolioModelsComponent', () => {
  let component: PortfolioModelsComponent;
  let fixture: ComponentFixture<PortfolioModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
