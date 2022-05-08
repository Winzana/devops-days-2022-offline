import { IContent } from '@entities';
import { Normalized } from '@helpers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPayloadError } from '../../generic.types';

export interface IContentInitialState {
  errors: {
    [key: string]: IPayloadError | undefined;
    fetchContent: IPayloadError | undefined;
  };
  loading: boolean;
  content: IContent | null;
  contents: { [key: string]: IContent };
}

export const initialState: IContentInitialState = {
  content: null,
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
      state.loading = false;
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
  },
});

export const {
  fetchContentClear,
  fetchContentSucceeded,
  fetchContent,
  fetchContentFailed,
} = contentSlice.actions;

export default contentSlice.reducer;