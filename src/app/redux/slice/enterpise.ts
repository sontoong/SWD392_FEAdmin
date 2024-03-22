import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../utils/agent";
import { AxiosError } from "axios";
import { CandidateDetail } from "../../models/user";
import { EnterpriseInfo } from "../../models/enterprise";

const initialState = {
  enterprises: [] as EnterpriseInfo[],
  enterprise: {} as EnterpriseInfo,
  status: "idle",
};

const enterpriseSlice = createSlice({
  name: "enterprise",
  initialState,
  reducers: {},
});

export const fetchEnterprises = createAsyncThunk(
  "enterprise/fetchEnterprises",
  async () => {
    try {
      const response = await agent.Admin.getEnterprises();
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

export const enterpriseReducers = enterpriseSlice.actions;

export default enterpriseSlice.reducer;
