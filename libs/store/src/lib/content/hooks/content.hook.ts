import { useDispatch, useSelector } from 'react-redux';
import { ErrorState, selectError } from '../../generic.error.reducer';
import {
  contentSelector,
  fetchContentClear,
  loadingSelector,
} from '../slices/content.slice';
import { getContents } from '../thunks/content.thunk';
import { ContentsFilters } from '../api/contents.filters';

export const useContent = (loadOnMount = false) => {
  const dispatch = useDispatch();

  const getAllContents = (contentsFilters: ContentsFilters) => {
    getContents(contentsFilters);
  };

  const clearContent = () => {
    dispatch(fetchContentClear());
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
  };
};
