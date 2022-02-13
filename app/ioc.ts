import 'reflect-metadata'
import { Container, decorate, injectable, interfaces } from "inversify";
import { PublicApiProvider } from "./providers/public-api-provider.interface";
import { PublicApi } from "./providers/public-api/public-api";
import {
  autoProvide,
  fluentProvide,
  buildProviderModule
} from 'inversify-binding-decorators'
import { Controller } from 'tsoa';

const types = {
  PublicApi: Symbol("PublicApi")
}
const iocContainer = new Container();

decorate(injectable(), Controller)

iocContainer.bind<PublicApiProvider>(types.PublicApi).to(PublicApi);

iocContainer.load(buildProviderModule());

export const provideSingleton = function <T>(
  identifier: interfaces.ServiceIdentifier<T>
) {
  return fluentProvide(identifier).inSingletonScope().done();
};

export {
  iocContainer,
  autoProvide
};