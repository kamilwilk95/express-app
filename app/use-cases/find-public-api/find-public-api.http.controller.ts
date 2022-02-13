import 'reflect-metadata'
import { provide } from 'inversify-binding-decorators';
import { Get, Query, Route } from 'tsoa';
import { inject } from 'inversify';
import { PublicApiService } from './find-public-api.service';
import { FindPublicApiQuery } from './find-public-api.query';

@Route('')
@provide(FindPublicApiHttpController)
export class FindPublicApiHttpController {
  constructor(@inject(PublicApiService) private readonly service: PublicApiService) {}
  @Get()
  findPublicApi(
    @Query() name?: string,
    @Query() cors?: boolean
  ) {
    return this.service.findPublicApi(new FindPublicApiQuery({
      cors,
      name
    }));
  }
}

