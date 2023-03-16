import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//import { signup, login, getCurrent, logout } from 'shared/services/auth';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    console.log(credentials);
    try {
      const result = await instance.post('/users/signup', credentials);
      setToken(result.data.token);
      return result.data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const result = await instance.post('/users/login', credentials);
      setToken(result.data.token);
      return result.data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

// export const getCurrentUser = createAsyncThunk(
//   'auth/current',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Fetching user error');
//     }
//     try {
//       setToken(persistedToken);
//       const response = await instance.get('/users/current');
//       return response.data;
//     } catch ({ response }) {
//       setToken();
//       return thunkAPI.rejectWithValue(response);
//     }
//   }
// );

// export const getCurrentUser = createAsyncThunk(
//   'auth/current',
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const { auth } = getState();
//       const { data } = await getCurrent(auth.token);
//       return data;
//     } catch ({ response }) {
//       return rejectWithValue(response);
//     }
//   },
//   {
//     condition: (_, { getState }) => {
//       const { auth } = getState();
//       if (!auth.token) {
//         return false;
//       }
//     },
//   }
// );

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    const persistedToken = auth.token;
    try {
      setToken(persistedToken);
      const response = await instance.get('/users/current');
      return response.data;
    } catch ({ response }) {
      setToken();
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.post('/users/logout');
      setToken();
      return response.data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
