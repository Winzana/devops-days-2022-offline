import { get, set } from 'idb-keyval';

export class OfflineDataProvider {
  static get<T = any>(key: IDBValidKey): Promise<T | undefined> {
    return get(key);
  }

  static set(key: IDBValidKey, value: any): Promise<void> {
    return set(key, value);
  }
}
