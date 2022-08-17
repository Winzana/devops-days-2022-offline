import AsyncStorage from '@react-native-async-storage/async-storage';

export class OfflineDataProvider {
  static get(key: string): Promise<string | null> {
    return AsyncStorage.getItem(key);
  }

  static set(key: string, value: any): Promise<void> {
    return AsyncStorage.setItem(key, value);
  }
}
