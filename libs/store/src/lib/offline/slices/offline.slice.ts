import { createSlice } from '@reduxjs/toolkit';

export interface IOfflineInitialState {
  isOffline: boolean;
}

export const initialState: IOfflineInitialState = {
  isOffline: false,
};

type State = typeof initialState;
export type OfflineState = { offline: State };
export const offlineSelector = (state: OfflineState) => state.offline.isOffline;

const offlineSlice = createSlice({
  name: 'offline',
  initialState,
  reducers: {
    fetchOfflineOne: (state: State) => {
      state.isOffline = true;
    },
    fetchOfflineOff: (state: State) => {
      state.isOffline = false;
    },
  },
});

export const { fetchOfflineOne, fetchOfflineOff } = offlineSlice.actions;

export default offlineSlice.reducer;
