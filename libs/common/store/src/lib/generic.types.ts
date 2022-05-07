import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

export interface IPayloadError {
  /**
   * Api Error
   */
  code?: string | number;

  /**
   * Determine if error come from axios or not
   *
   * @type {boolean}
   * @memberof IPayloadError
   */
  isAxiosError: boolean;

  /**
   * Message stacktrace content
   *
   * @type {string}
   * @memberof IPayloadError
   */
  message: string;

  /**
   * Name
   *
   * @type {string}
   * @memberof IPayloadError
   */
  name: string;

  /**
   * Stack error
   *
   * @type {string}
   * @memberof IPayloadError
   */
  stack: string;
}

export type AppThunk<ReturnType = void, State = unknown> = ThunkAction<
  ReturnType,
  State,
  unknown,
  AnyAction
>;
