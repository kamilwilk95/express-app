import { Api } from './public-api.model';

export interface PublicApiProvider {
  getData(): Promise<Api[]>;
}