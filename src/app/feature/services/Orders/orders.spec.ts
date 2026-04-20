import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { Orders } from './orders';
import { OrderAdapter } from '../Adapters/order.adapter';
import { OrderEndPoints } from '../Enums/order.endpoints';

describe('Orders Service', () => {
  let service: Orders;

  const mockApiResponse = [{ id: 1 }];
  const adaptedResponse = [{ id: 1, name: 'test' }];

  const httpClientMock = {
    get: jasmine.createSpy('get').and.returnValue(of(mockApiResponse)),
  };

  const orderAdapterMock = {
    Adapt: jasmine.createSpy('Adapt').and.returnValue(adaptedResponse),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Orders,
        { provide: HttpClient, useValue: httpClientMock },
        { provide: OrderAdapter, useValue: orderAdapterMock },
      ],
    });

    service = TestBed.inject(Orders);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call HttpClient.get with correct endpoint', () => {
    service.getAllOrder().subscribe();

    expect(httpClientMock.get).toHaveBeenCalledWith(OrderEndPoints.Orders);
  });

  it('should adapt response using OrderAdapter', () => {
    service.getAllOrder().subscribe((res) => {
      expect(orderAdapterMock.Adapt).toHaveBeenCalledWith(mockApiResponse);
      expect(res).toEqual(adaptedResponse);
    });
  });
});