import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { OrdersComponent } from './orders';
import { IOrderModel } from '../../models/order';
import { Table } from '../../../shared/UI/table/table';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  const mockOrders: IOrderModel[] = [
    { id: 1 } as unknown as IOrderModel,
  ];

  const activatedRouteMock = {
    snapshot: {
      data: {
        data: mockOrders,
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    })
    .overrideComponent(OrdersComponent, {
      remove: { imports: [Table] }
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize orders from route data', () => {
    expect(component.allOrders()).toEqual(mockOrders);
  });

  it('should set isLoading to false initially', () => {
    expect(component.isLoading()).toBeFalse();
  });

  it('should handle interval and stop loading when data exists', fakeAsync(() => {
    tick(300);

    expect(component.isLoading()).toBeFalse();
  }));
});