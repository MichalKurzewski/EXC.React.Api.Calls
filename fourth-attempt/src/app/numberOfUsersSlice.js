import { createSlice } from '@reduxjs/toolkit'

export const numberOfUsersSlice = createSlice({
  name: 'numberOfUsers',
  initialState:{
    numberOfUsers: 0
  },
  reducers: {
      setNumberOfUsers :(state, action)=>{
            state.numberOfUsers = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { setNumberOfUsers } = numberOfUsersSlice.actions

export default numberOfUsersSlice.reducer