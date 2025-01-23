import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    session: null,
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  },

  reducers: {
    setSession(state, action) {
      const { session, user } = action.payload;
      state.session = session; // Guarda la información de la sesión
      state.user = user; // Guarda la información del usuario
      state.isLoggedIn = true; // Marca al usuario como logueado
      state.error = null; // Resetea errores
    },
    clearSession(state) {
      state.session = null; // Elimina la información de la sesión
      state.user = null; // Elimina la información del usuario
      state.isLoggedIn = false; // Marca al usuario como no logueado
      state.error = null; // Resetea errores
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  }
})

export const { setSession, clearSession, setLoading, setError } = userSlice.actions

export const selectSession = (state) => state.user.session;
export const selectUser = (state) => state.user.user;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;

export default userSlice.reducer