import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticCard } from './analytic-card';

describe('AnalyticCard', () => {
  let component: AnalyticCard;
  let fixture: ComponentFixture<AnalyticCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
