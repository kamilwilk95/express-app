import { Container } from "inversify";
import { PublicApiProvider } from "./providers/public-api-provider.interface";
import { PublicApi } from "./providers/public-api/public-api";

const types = {
  PublicApi: Symbol("PublicApi")
}

export const container = new Container();
container.bind<PublicApiProvider>(types.PublicApi).to(PublicApi);