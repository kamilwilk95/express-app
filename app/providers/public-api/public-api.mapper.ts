import { PublicApiDto } from "./public-api.dto";

export class PublicApiMapper {
  toModel(dto: PublicApiDto): Api {
    return {
      title: dto.API,
      description: dto.Description,
      cors: this.mapCors(dto.Cors),
      category: dto.Category,
      link: dto.Link
    }
  }

  private mapCors(cors: string): boolean {
    if (cors === 'yes') {
      return true;
    }

    if (cors === 'no') {
      return false;
    }

    return undefined;
  }
}