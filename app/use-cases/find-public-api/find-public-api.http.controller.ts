import 'reflect-metadata'
import { PublicApiService } from './find-public-api.service';
import { FindPublicApiQuery } from './find-public-api.query';
import { iocContainer, TYPES } from '../../ioc';
import { ExpressRedisCache } from 'express-redis-cache';
import express from 'express';

export const publicApiRouter = express.Router();
const cache = iocContainer.get<ExpressRedisCache>(TYPES.Cache);
const service = iocContainer.get<PublicApiService>(PublicApiService);
publicApiRouter.get('', cache.route(), async (req, res) => {
  res.json(await service.findPublicApi(new FindPublicApiQuery({
    cors: req.query['cors'] as unknown as boolean,
    name: req.query['name'] as string
  })))
});