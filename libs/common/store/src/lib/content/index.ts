import { ContentApi } from './api/content.api';
import { useContent } from './hooks/content.hook';
import type { ContentState } from './slices/content.slice';
import contentSlice, {
  fetchContent,
  fetchContentSucceeded,
  fetchContentClear,
  fetchContentFailed,
} from './slices/content.slice';

export {
  ContentState,
  ContentApi,
  contentSlice,
  useContent,
  fetchContent,
  fetchContentSucceeded,
  fetchContentClear,
  fetchContentFailed,
};
