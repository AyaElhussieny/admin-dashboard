import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisableCharts } from './visable-charts';

describe('VisableCharts', () => {
  let component: VisableCharts;
  let fixture: ComponentFixture<VisableCharts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisableCharts],
    }).compileComponents();

    fixture = TestBed.createComponent(VisableCharts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
