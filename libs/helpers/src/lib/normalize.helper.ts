// eslint-disable-next-line @typescript-eslint/ban-types
export type Normalized<T extends object> = { [key: string]: T };

// eslint-disable-next-line @typescript-eslint/ban-types
export const normalizeObject = <T extends object>(
  items: T[],
  key: keyof T
): Normalized<T> => {
  return items.reduce<Normalized<T>>((acc, item) => {
    if (typeof item[key] !== 'string') {
      throw new Error(`value of ${key} in each item should be a string`);
    }
    const id: string = (item[key] as unknown) as string;
    acc[id] = item;
    return acc;
  }, {});
};
