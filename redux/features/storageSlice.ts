import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ConfigState {
  id: string;
  config: string;
  drinksQty: number;
  toolsQty: number;
}

export const addToStore = createSlice({
  name: 'addToStore',

  initialState: [] as ConfigState[],
  reducers: {
    addConfigToStorage: (state, action: PayloadAction<ConfigState>) => {
      state.push(action.payload);
    },
    increaseTools: (state, action: PayloadAction<string>) => {
      state.forEach((item) => {
        if (item.id === action.payload) {
          item.toolsQty += 1;
        }
      });
    },
    decreaseTools: (state, action: PayloadAction<string>) => {
      state.forEach((item) => {
        if (item.id === action.payload && item.toolsQty !== 0) {
          item.toolsQty -= 1;
        }
      });
    },
  },
});

export const { addConfigToStorage, increaseTools, decreaseTools } =
  addToStore.actions;
export default addToStore.reducer;
