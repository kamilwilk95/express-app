export interface PublicApiProvider {
  getData(): Promise<Api[]>;
}