import type { IContent } from '@entities';
import { objectToSearchParams } from '@helpers';
import axios, { AxiosResponse } from 'axios';
import { ContentsFilters } from './contents.filters';

export class ContentApi {
  public static getContents = (
    filters: ContentsFilters
  ): Promise<AxiosResponse<Array<IContent>>> => {
    const params = objectToSearchParams(filters);
    return axios.get<Array<IContent>>('/api/contents', {
      params,
    });
  };
}
