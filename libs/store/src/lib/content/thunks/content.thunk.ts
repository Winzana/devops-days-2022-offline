import { IContent } from "@entities";
import { AxiosResponse } from "axios";
import { AppThunk } from "../../generic.types";
import { ContentApi } from "../api/content.api";
import {
  fetchContent,
  fetchContentFailed,
  fetchContentSucceeded
} from "../slices/content.slice";
import { get } from 'idb-keyval';

export const getContents = (): AppThunk<Promise<boolean>,
  any> => async (dispatch, getState) => {
  dispatch(fetchContent());
  let response: AxiosResponse<IContent[], any>;

  try {
    if (getState().offline.isOffline) {
      const contents = JSON.parse(await get("contents"));
      dispatch(fetchContentSucceeded(contents));
      return true;
    } else {
      response = await ContentApi.getContents({});
      if (response && response.data) {
        let contents = {};

        for (const item of response.data) {
          contents = { ...contents, [item.id]: item };
        }

        // - Dispatch succeeded, set content
        dispatch(fetchContentSucceeded(contents));
        return true;
      }
    }
  } catch ({ message, name, code, stack, isAxiosError, ...rest }) {
    //
    dispatch(
      fetchContentFailed({
        message: "An error occured",
        name: "An error occured",
        isAxiosError: false,
        stack: ""
      })
    );
  }
  return false;
};
