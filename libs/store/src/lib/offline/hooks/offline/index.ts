import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOfflineOne,
  fetchOfflineOff,
  offlineSelector,
} from '../../slices/offline.slice';
import { useEffect } from 'react';

export const useOffline = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener('load', () => {
      // 1st, we set the correct status when the page loads
      navigator.onLine
        ? dispatch(fetchOfflineOff())
        : dispatch(fetchOfflineOne());

      // now we listen for network status changes
      window.addEventListener('online', () => {
        dispatch(fetchOfflineOff());
      });

      window.addEventListener('offline', () => {
        dispatch(fetchOfflineOne());
      });
    });
  }, []);

  const isOffline = useSelector(offlineSelector);

  return {
    isOffline,
  };
};
