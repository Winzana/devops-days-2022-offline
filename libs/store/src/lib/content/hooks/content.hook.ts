import { useDispatch, useSelector } from 'react-redux';
import { ErrorState, selectError } from '../../generic.error.reducer';
import {
  contentSelector,
  fetchContentClear,
  loadingSelector,
} from '../slices/content.slice';
import { getContents } from '../thunks/content.thunk';
import { createContent as createContentThunk } from '../thunks/create-content.thunk';
import { IContent } from '@entities';

export const useContent = () => {
  const dispatch = useDispatch();

  const getAllContents = () => {
    dispatch(getContents());
  };

  const clearContent = () => {
    dispatch(fetchContentClear());
  };

  const createContent = async (content: IContent) => {
    dispatch(createContentThunk(content));
  };
  const contentError = useSelector((state: ErrorState) => {
    selectError(state, 'content/fetchContent');
  });
  const loading = useSelector(loadingSelector);
  const contents = useSelector(contentSelector);

  return {
    loading,
    contentError,
    contents,
    getAllContents,
    clearContent,
    createContent,
  };
};
