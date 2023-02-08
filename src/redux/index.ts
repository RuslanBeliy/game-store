import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './slices/cart-slice';
import { gamesReducer } from './slices/games-slice';

export const store = configureStore({
  reducer: { games: gamesReducer, cart: cartReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
