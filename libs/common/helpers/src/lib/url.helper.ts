export const replaceParamToUrlPath = (
  path: string,
  param: string,
  newValue: string
): string => {
  let url: URL;
  try {
    url = new URL(`http://localhost${path}`);
    url.searchParams.set(param, newValue);
  } catch (err) {
    throw new Error('Cannot parse url');
  }
  return `${url.pathname}${url.search}`;
};

export const setParamToUrlPath = (
  path: string,
  param: string,
  value: string
): string => {
  let url: URL;
  let search: URLSearchParams;

  try {
    url = new URL(`http://localhost${path}`);
    search = new URLSearchParams({ [param]: value });
  } catch (err) {
    throw new Error('Cannot parse url');
  }

  return `${url.pathname}?${search.toString()}`;
};

/**
 * Transform object into a valid URL search params string
 *
 * @param params object to map into search params
 * @returns valid URL search params string
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const objectToSearchParams = (params: object): URLSearchParams => {
  const searchParams = Object.entries(params).reduce((search, [key, param]) => {
    if (Array.isArray(param)) {
      param.forEach((p) => search.append(`${key}[]`, p));
      return search;
    }
    search.set(key, param as string);
    return search;
  }, new URLSearchParams());
  return searchParams;
};

/**
 * Remove search param from searchparams object
 *
 * @param search searchParams to parse as string
 * @param key the param to remove
 * @returns searchparams with deleted key as string
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const removeSearchParam = (search: string, key: string) => {
  const queryParams = new URLSearchParams(search);
  if (queryParams.has(key)) {
    queryParams.delete(key);
  }
  return queryParams.toString();
};
