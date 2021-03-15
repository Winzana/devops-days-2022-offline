import { AxiosError } from 'axios';
import { IPayloadError, IErrorAction } from './generic.types';

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
