import { PublicApiProvider } from "../public-api-provider.interface";
import axios from 'axios';
import { PublicApiDto } from "./public-api.dto";
import { PublicApiMapper } from "./public-api.mapper";
import { injectable } from "inversify";
import { Api } from '../public-api.model';

interface ApiResponse {
  count: number;
  entries: PublicApiDto[]
}

@injectable()
export class PublicApi implements PublicApiProvider {
  private mapper = new PublicApiMapper();

  async getData(name?: string, cors?: boolean): Promise<Api[]> {
    const response = await axios.get<ApiResponse>('https://api.publicapis.org/entries', {
      params: {
        title: name,
        cors: this.mapCorsToQueryFormat(cors)
      }
    });

    return response.data.entries.map(entity => this.mapper.toModel(entity))
  }

  private mapCorsToQueryFormat(cors?: boolean) {
    if (!cors) {
      return undefined;
    }

    if (cors) {
      return 'yes';
    }

    return 'no';
  }
}