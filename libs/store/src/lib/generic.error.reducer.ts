import { AxiosError } from 'axios';
import { IPayloadError } from './generic.types';

export interface ErrorState {
  errors: IState;
}

export interface IState {
  [key: string]: {
    /**
     * HTTP Code or Error Code
     *
     * @type {string}
     */
    code?: string;
    /**
     * Indicate if the error cames from axios or not
     *
     * @type {boolean}
     */
    isAxiosError: boolean;
    /**
     * Error message
     *
     * @type {string}
     */
    message: string;
    /**
     * Name of the error
     *
     * @type {string}
     */
    name: string;
    /**
     * Stack trace error
     *
     * @type {string}
     */
    stack: string;
  };
}

interface IErrorAction {
  /**
   * Error payload containing error relatives informations
   *
   * @type {IPayloadError}
   * @memberof IErrorAction
   */
  payload: IPayloadError;

  /**
   * Action type eg: fetch/addUserFailed
   *
   * @type {string}
   * @memberof IErrorAction
   */
  type: string;
}

// eg : useSelector(state => selectErrors(state, "users/fetchUsersFailed"))
export const selectError = (state: ErrorState, errorKey: string) =>
  state.errors[errorKey];

export const errorReducer = (state = {}, action: IErrorAction): IState => {
  switch (action.type) {
    case String(action.type.match(/^[[a-z]+\/fetch[A-Za-z]+Failed/)): {
      if (!action.payload) {
        return state;
      }
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
    }
    default:
      return state;
  }
};

export const generateErrorHandlerAction = (
  { name, response: responseError, stack, isAxiosError }: AxiosError<any>,
  action: (error: IPayloadError) => IErrorAction
) => {
  let statusCode = '';
  let message = '';
  if (responseError != null) {
    const { data } = responseError;
    statusCode = data.statusCode;
    message = data.message;
  }
  // - Fetch failed, set error
  return action({
    isAxiosError,
    message,
    name,
    code: statusCode,
    stack: stack || '',
  });
};
