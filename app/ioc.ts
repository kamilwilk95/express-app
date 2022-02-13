import 'reflect-metadata'
import { Container, decorate, injectable } from "inversify";
import { PublicApiProvider } from "./providers/public-api-provider.interface";
import { PublicApi } from "./providers/public-api/public-api";
import {
  autoProvide,
  buildProviderModule
} from 'inversify-binding-decorators'
import { Controller } from 'tsoa';
import { config, Config } from './config/config';

export const TYPES = {
  Config: Symbol.for('config'),
}
const iocContainer = new Container();

decorate(injectable(), Controller)

iocContainer.load(buildProviderModule());
iocContainer.bind<Config>(TYPES.Config).toConstantValue(config)

iocContainer.bind<PublicApiProvider>(PublicApiProvider).to(PublicApi);
export {
  iocContainer,
  autoProvide
};