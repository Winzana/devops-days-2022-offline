import type { IContent } from '@entities';
import axios, { AxiosResponse } from 'axios';

export class CreateContentApi {
  public static post = (
    content: IContent
  ): Promise<AxiosResponse<IContent>> => {
    return axios.post<IContent>('/api/contents', content);
  };
}
