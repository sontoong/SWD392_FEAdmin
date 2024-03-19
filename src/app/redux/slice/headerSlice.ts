import { createSlice } from "@reduxjs/toolkit";

interface headerState {
  headerTitle: [{ title: string; path: string }];
}

const initialState: headerState = {
  headerTitle: [{ title: "", path: "" }],
};
export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeaderTitle: (state, action) => {
      state.headerTitle = action.payload;
    },
  },
});

export const { setHeaderTitle } = headerSlice.actions;

export default headerSlice.reducer;
