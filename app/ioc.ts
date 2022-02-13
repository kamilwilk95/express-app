import 'reflect-metadata'
import { Container } from "inversify";
import { PublicApiProvider } from "./providers/public-api-provider.interface";
import { PublicApi } from "./providers/public-api/public-api";
import {
  autoProvide,
  buildProviderModule
} from 'inversify-binding-decorators'
import { config, Config } from './config/config';
import cache, {ExpressRedisCache} from 'express-redis-cache';

export const TYPES = {
  Config: Symbol.for('config'),
  Cache: Symbol.for('cache'),
}
const iocContainer = new Container();

iocContainer.load(buildProviderModule());
iocContainer.bind<Config>(TYPES.Config).toConstantValue(config)
iocContainer.bind<ExpressRedisCache>(TYPES.Cache).toDynamicValue((context) => {
  const config = context.container.get<Config>(TYPES.Config);

  return cache({
    host: config.get('redis.host'),
    port: config.get('redis.port')
  })
})

iocContainer.bind<PublicApiProvider>(PublicApiProvider).to(PublicApi);
export {
  iocContainer,
  autoProvide
};