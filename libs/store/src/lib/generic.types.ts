export interface IPayloadError {
  /**
   * Api Error
   */
  code?: string;

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

console.warn('test');
// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IErrorAction {
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
