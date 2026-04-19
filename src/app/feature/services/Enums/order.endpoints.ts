import { environment } from '../../../../environments/environment';

const baseUrl = environment.apiUrl;

export class OrderEndPoints {
  static Orders = `${baseUrl}/products`;
}
