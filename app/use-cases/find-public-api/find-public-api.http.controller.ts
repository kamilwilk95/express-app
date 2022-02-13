import 'reflect-metadata'
import { provide } from 'inversify-binding-decorators';
import { Get, Route } from 'tsoa';

@Route('')
@provide(FindPublicApiHttpController) //TODO: change to provideSingleton
export class FindPublicApiHttpController {
  @Get()
  findPublicApi() {
    return {'test': 1}
  }
}

