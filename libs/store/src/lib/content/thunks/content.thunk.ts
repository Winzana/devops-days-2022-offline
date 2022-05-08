import { IContent } from '@entities';
import { AxiosResponse } from 'axios';
import { AppThunk } from '../../generic.types';
import { ContentApi } from '../api/content.api';
import {
  fetchContent,
  fetchContentFailed,
  fetchContentSucceeded,
} from '../slices/content.slice';
import { ContentsFilters } from '../api/contents.filters';

export const getContents = (
  contentsFilters: ContentsFilters
): AppThunk => async (dispatch) => {
  dispatch(fetchContent());
  let response: AxiosResponse<IContent[], any>;

  try {
    response = await ContentApi.getContents(contentsFilters);
    if (response && response.data) {
      let contents = {};

      for (const item of response.data) {
        contents = { ...contents, [item.id]: item };
      }

      // - Dispatch succeeded, set content
      dispatch(fetchContentSucceeded(contents));
      return;
    }
  } catch ({ message, name, code, stack, isAxiosError, ...rest }) {
    //
  }
};
