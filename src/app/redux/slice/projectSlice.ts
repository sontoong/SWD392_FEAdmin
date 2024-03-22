import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../utils/agent";
import { AxiosError } from "axios";
import { Project } from "../../models/project";

const initialState = {
  projects: [] as Project[],
  project: {} as Project,
  status: "idle",
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
});

export const fetchProjects = createAsyncThunk(
  "project/fetchProjects",
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

export const projectReducers = projectSlice.actions;

export default projectSlice.reducer;
