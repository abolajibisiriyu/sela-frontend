import projectsReducer, { initialState } from "../reducer";
import * as actionTypes from "../../actionTypes";

describe("projects reducer", () => {
  const someAction = { type: "" };
  it("returns correct initial state", () => {
    expect(projectsReducer(undefined, someAction)).toEqual(initialState);
  });

  describe("FETCH_PROJECTS", () => {
    it("returns correct state when pending", () => {
      const action = { type: actionTypes.fetchProjects.pending };
      const expectedState = {
        ...initialState,
        fetching: true,
        fetched: false,
        error: null
      };
      expect(projectsReducer(undefined, action)).toEqual(expectedState);
    });

    it("returns correct state when fulfilled", () => {
      const payload = {
        data: [
          {
            title: "Some Project"
          }
        ]
      };
      const action = {
        type: actionTypes.fetchProjects.fulfilled,
        payload
      };
      const expectedState = {
        ...initialState,
        fetching: false,
        fetched: true,
        projects: payload.data,
        error: null
      };
      expect(projectsReducer(undefined, action)).toEqual(expectedState);
    });

    it("returns correct state when rejected", () => {
      const payload = {
        error: {}
      };
      const action = {
        type: actionTypes.fetchProjects.rejected,
        payload
      };
      const expectedState = {
        ...initialState,
        fetching: false,
        fetched: false,
        error: payload
      };
      expect(projectsReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
