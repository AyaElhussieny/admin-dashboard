import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsCharts } from './reports-charts';

describe('ReportsCharts', () => {
  let component: ReportsCharts;
  let fixture: ComponentFixture<ReportsCharts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsCharts],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsCharts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
