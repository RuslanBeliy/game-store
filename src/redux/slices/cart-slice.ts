import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IGame } from '../../models/game';

interface GamesState {
  items: IGame[];
}

const initialState: GamesState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<IGame[]>) {
      state.items = action.payload;
    },
    addToCart(state, action: PayloadAction<IGame>) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const idx = state.items.findIndex((el) => el.id === action.payload);
      state.items.splice(idx, 1);
    },
  },
});

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
