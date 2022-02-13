import { provide } from "inversify-binding-decorators";
import { PublicApiProvider } from "../../providers/public-api-provider.interface";
import { FindPublicApiQuery } from "./find-public-api.query";

@provide(PublicApiService)
export class PublicApiService {
  constructor(private readonly publicApi: PublicApiProvider) {}
  async findPublicApi(query: FindPublicApiQuery) {
    return this.publicApi.getData(query.name, query.cors);
  }
}