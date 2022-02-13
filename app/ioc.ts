import 'reflect-metadata'
import { Container, decorate, injectable } from "inversify";
import { PublicApiProvider } from "./providers/public-api-provider.interface";
import { PublicApi } from "./providers/public-api/public-api";
import {
  autoProvide,
  buildProviderModule
} from 'inversify-binding-decorators'
import { Controller } from 'tsoa';

export const TYPES = {
  PublicApi: Symbol.for("PublicApi")
}
const iocContainer = new Container();

decorate(injectable(), Controller)


iocContainer.load(buildProviderModule());

iocContainer.bind<PublicApiProvider>(PublicApiProvider).to(PublicApi);
export {
  iocContainer,
  autoProvide
};