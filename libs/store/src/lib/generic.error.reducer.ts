import { IErrorAction, IState } from './generic.types';
import { generateErrorHandlerAction } from './redux.helper';
import { IAppState } from './store.entity';

export { generateErrorHandlerAction, IState, IErrorAction };

// eg : useSelector(state => selectErrors(state, "users/fetchUsersFailed"))
export const selectError = (state: IAppState, errorKey: string) =>
  state.errors[errorKey];

export const errorReducer = (state = {}, action: IErrorAction): IState => {
  switch (action.type) {
    case String(action.type.match(/^[[a-z]+\/fetch[A-Za-z]+Failed/)):
      // eslint-disable-next-line no-case-declarations
      const { code, isAxiosError, name, message, stack } = action.payload;
      return {
        ...state,
        [action.type]: {
          code,
          stack,
          isAxiosError,
          message,
          name,
        },
      };
    default:
      return state;
  }
};
