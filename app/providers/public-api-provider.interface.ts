import { Api } from './public-api.model';

export abstract class PublicApiProvider {
  abstract getData(name?: string, cors?: boolean): Promise<Api[]>;
}