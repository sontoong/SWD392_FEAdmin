import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../utils/agent";
import { AxiosError } from "axios";
import { CandidateDetail } from "../../models/user";

const initialState = {
  candidates: [] as CandidateDetail[],
  candidate: {} as CandidateDetail,
  status: "idle",
};

const candidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {},
});

export const fetchCandidates = createAsyncThunk(
  "candidate/fetchCandidates",
  async () => {
    try {
      const response = await agent.Admin.getCandidates();
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return {
          message: error.response?.data.error.message,
          status: error.response?.status,
        };
      }
    }
  },
);

export const fetchCandidate = createAsyncThunk<CandidateDetail, string>(
  "candidate/fetchCandidate",
  async (username) => {
    try {
      const response = await agent.Admin.getCandidate(username);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return {
          message: error.response?.data.error.message,
          status: error.response?.status,
        };
      }
    }
  },
);

export const candidateReducers = candidateSlice.actions;

export default candidateSlice.reducer;
