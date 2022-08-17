import { IContent } from '@entities';
import { Normalized } from '@helpers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPayloadError } from '../../generic.types';
import { OfflineDataProvider } from '@offline-storage';

export interface IContentInitialState {
  errors: {
    [key: string]: IPayloadError | undefined;
    fetchContent: IPayloadError | undefined;
  };
  loading: boolean;
  content: IContent | null;
  contents: { [key: string]: IContent };
  lastUpdate: string | null;
}

export const initialState: IContentInitialState = {
  content: null,
  lastUpdate: null,
  contents: {},
  loading: false,
  errors: {
    fetchContent: undefined,
  },
};

type State = typeof initialState;
export type ContentState = { content: State };
export const loadingSelector = (state: ContentState) => state.content.loading;
export const contentSelector = (state: ContentState) => state.content.contents;
export const contentErrorSelector = (state: ContentState) =>
  state.content.errors ? state.content.errors.fetchContent : null;

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    fetchContentClear: (state: State) => {
      state.content = null;
    },
    /**
     * Set loading to true when waiting for person info
     */
    fetchContentsClear: (state: State) => {
      state.contents = {};
    },
    /**
     * Store the user info and reset loading
     */
    fetchContentSucceeded: (
      state: State,
      action: PayloadAction<Normalized<IContent>>
    ) => {
      state.contents = { ...action.payload };
      state.lastUpdate = new Date().toUTCString();
      state.loading = false;
      OfflineDataProvider.set('contents', JSON.stringify(state.contents));
      OfflineDataProvider.set('lastUpdate', new Date().toUTCString());
    },

    fetchContent: (state: State) => {
      state.loading = true;
    },

    fetchContentFailed: (
      state: State,
      _action: PayloadAction<IPayloadError>
    ) => {
      state.loading = false;
      state.errors = {
        ...state.errors,
        fetchContent: _action.payload,
      };
    },
    /**
     * Store the user info and reset loading
     */
    fetchCreateContentSucceeded: (
      state: State,
      action: PayloadAction<IContent>
    ) => {
      state.contents = {
        [action.payload.id]: action.payload,
        ...state.contents,
      };
      state.loading = false;
      OfflineDataProvider.set('contents', JSON.stringify(state.contents));
    },

    fetchCreateContent: (state: State) => {
      state.loading = true;
    },

    fetchCreateContentFailed: (
      state: State,
      _action: PayloadAction<IPayloadError>
    ) => {
      state.loading = false;
      state.errors = {
        ...state.errors,
        fetchContent: _action.payload,
      };
    },
  },
});

export const {
  fetchContentClear,
  fetchContentSucceeded,
  fetchContent,
  fetchContentFailed,
  fetchCreateContentSucceeded,
  fetchCreateContent,
  fetchCreateContentFailed,
} = contentSlice.actions;

export default contentSlice.reducer;
