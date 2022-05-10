import { IContent } from '@entities';
import { AxiosResponse } from 'axios';
import { AppThunk } from '../../generic.types';
import {
  fetchCreateContent,
  fetchCreateContentFailed,
  fetchCreateContentSucceeded,
} from '../slices/content.slice';
import { CreateContentApi } from '../api/create-content.api';
import { OfflineState } from '@store';

export const createContent = (
  content: IContent
): AppThunk<Promise<boolean>, OfflineState> => async (dispatch, getState) => {
  dispatch(fetchCreateContent());
  let response: AxiosResponse<IContent>;
  try {
    if (getState().offline.isOffline) {
      dispatch(fetchCreateContentSucceeded(content));
      return false;
    } else {
      response = await CreateContentApi.post(content);
      if (response && response.data) {
        // - Dispatch succeeded, set content
        dispatch(fetchCreateContentSucceeded(response.data));
        return true;
      }
    }
  } catch ({ message, name, code, stack, isAxiosError, ...rest }) {
    //
    dispatch(
      fetchCreateContentFailed({
        message: 'An error occured',
        name: 'An error occured',
        isAxiosError: false,
        stack: '',
      })
    );
  }
  return false;
};
