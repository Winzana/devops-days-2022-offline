import { IContent } from '@entities';
import { AxiosResponse } from 'axios';
import { AppThunk } from '../../generic.types';
import { ContentApi } from '../api/content.api';
import {
  ContentState,
  fetchContent,
  fetchContentFailed,
  fetchContentSucceeded,
} from '../slices/content.slice';

export const getContents = (): AppThunk<
  Promise<boolean>,
  ContentState
> => async (dispatch, getState) => {
  dispatch(fetchContent());
  let response: AxiosResponse<IContent[], any>;

  try {
    response = await ContentApi.getContents({
      lastUpdate: getState().content.lastUpdate,
    });
    if (response && response.data) {
      let contents = {};

      for (const item of response.data) {
        contents = { ...contents, [item.id]: item };
      }

      // - Dispatch succeeded, set content
      dispatch(fetchContentSucceeded(contents));
      return true;
    }
  } catch ({ message, name, code, stack, isAxiosError, ...rest }) {
    //
    dispatch(
      fetchContentFailed({
        message: 'An error occured',
        name: 'An error occured',
        isAxiosError: false,
        stack: '',
      })
    );
  }
  return false;
};
