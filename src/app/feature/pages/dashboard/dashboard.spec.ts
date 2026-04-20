import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { Dashboard } from './dashboard';
import { Orders } from '../../../feature/services/Orders/orders';
import { IOrderModel } from '../../models/order';

describe('Dashboard Component', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  const mockOrders: IOrderModel[] = [
    { id: 1 } as unknown as IOrderModel,
  ];

  const ordersServiceMock = {
    getAllOrder: jasmine.createSpy('getAllOrder').and.returnValue(of(mockOrders)),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
      providers: [
        { provide: Orders, useValue: ordersServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should call orders service', () => {
    expect(ordersServiceMock.getAllOrder).toHaveBeenCalled();
  });

  it('should initialize orders signal with data', fakeAsync(() => {
    tick(300); 

    const data = component.allOrders();

    expect(data).toEqual(mockOrders);
  }));

  it('should set loading to false when data arrives', fakeAsync(() => {
    tick(300);

    expect(component.isLoading()).toBeFalse();
  }));
});