import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// User type
interface UserState {
  userId: string | null
}

const initialState: UserState = {
  userId: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.userId = action.payload.userId
    },
    clearUser: (state) => {
      state.userId = null
    },
  },
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
