import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOfflineOne,
  fetchOfflineOff,
  offlineSelector,
} from '../../slices/offline.slice';
import { useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';

export const useOffline = () => {
  const { isConnected } = useNetInfo();

  const dispatch = useDispatch();
  useEffect(() => {
    isConnected ? dispatch(fetchOfflineOff()) : dispatch(fetchOfflineOne());
  }, [isConnected]);

  const isOffline = useSelector(offlineSelector);

  return {
    isOffline,
  };
};
