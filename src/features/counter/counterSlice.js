import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from './counterAPI';

const initialState = {
  value: 0,
  userName:"waga",
  authenticated:false,
  token:"",
};

// async
export const loginAsync = createAsyncThunk(
  'counter/fetchCount',
  async (action) => {
    // console.log(action.pwd);
    
    const response = await login(action);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { //sync
    increment: (state,action) => {
        console.log(action);
      state.value += action.payload.n;
      
    },increment3: (state) => {
        state.value += 3;
      },
      sub2: (state) => {
        state.value -= 2;
      },
      logout: (state) => {
      },
  },
  extraReducers: (builder) => { //async result
    builder.addCase(loginAsync.fulfilled, (state, action) => {
        console.log(action);
        
        state.authenticated =true;
      });
  },
});

export const { increment,increment3,sub2,logout } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const selectauthenticated = (state) => state.counter.authenticated;
export const selectToken = (state) => state.counter.token;
export const selectUserName = (state) => state.counter.userName;
export default counterSlice.reducer;
