import { useOffline } from './hooks/offline';
import { OfflineState } from './slices/offline.slice';
import offlineSlice, {
  fetchOfflineOne,
  fetchOfflineOff,
} from './slices/offline.slice';

export {
  OfflineState,
  offlineSlice,
  useOffline,
  fetchOfflineOne,
  fetchOfflineOff,
};
