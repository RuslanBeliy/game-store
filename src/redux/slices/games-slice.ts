import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { axios } from '../../api/axios';

import { IGame } from '../../models/game';

export const fetchGames = createAsyncThunk('fetchGames/games', async () => {
  const { data } = await axios.get<IGame[]>('/games');
  return data;
});

export const fetchOneGame = createAsyncThunk(
  'fetchOneGame/games',
  async (params: { id: string }) => {
    const { data } = await axios.get<IGame>(`/games/${params.id}`);
    return data;
  }
);

interface GamesState {
  allGames: {
    items: IGame[];
    status: 'loading' | 'error' | 'success';
  };
  oneGame: {
    game: IGame | null;
    status: 'loading' | 'error' | 'success';
  };
}

const initialState: GamesState = {
  allGames: {
    items: [],
    status: 'loading',
  },
  oneGame: {
    game: null,
    status: 'loading',
  },
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGames.pending, (state) => {
      state.allGames.items = [];
      state.allGames.status = 'loading';
    });
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.allGames.items = action.payload;
      state.allGames.status = 'success';
    });
    builder.addCase(fetchGames.rejected, (state) => {
      state.allGames.items = [];
      state.allGames.status = 'error';
    });
    builder.addCase(fetchOneGame.pending, (state) => {
      state.oneGame.game = null;
      state.oneGame.status = 'loading';
    });
    builder.addCase(fetchOneGame.fulfilled, (state, action) => {
      state.oneGame.game = action.payload;
      state.oneGame.status = 'success';
    });
    builder.addCase(fetchOneGame.rejected, (state) => {
      state.oneGame.game = null;
      state.oneGame.status = 'error';
    });
  },
});

export const gamesReducer = gamesSlice.reducer;
