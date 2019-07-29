import * as actionTypes from "../actionTypes";

export const initialState = {
  projects: [],
  fetching: false,
  fetched: true,
  error: null
};

export default function projects(state = initialState, action) {
  switch (action.type) {
    case actionTypes.fetchProjects.pending:
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: null
      };
    case actionTypes.fetchProjects.fulfilled:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        projects: action.payload.data
      };
    case actionTypes.fetchProjects.rejected:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload
      };
    default:
      return state;
  }
}
