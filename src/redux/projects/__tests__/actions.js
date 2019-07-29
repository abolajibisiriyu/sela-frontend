import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import moxios from "moxios";
import * as actionTypes from "../../actionTypes";
import { initialState } from "../reducer";
import { fetchProjects } from "../actions";
import api from "../../../api";

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ projects: initialState });

describe("projects actions", () => {
  describe("fetchProjects", () => {
    beforeEach(function() {
      // import and pass your custom axios instance to this method
      moxios.install(api);
      store.clearActions();
    });

    afterEach(function() {
      // import and pass your custom axios instance to this method
      moxios.uninstall(api);
    });

    it("creates FETCH_PROJECTS_FULFILLED when fetching todos has been done successfully", () => {
      const expectedActions = [
        { type: actionTypes.fetchProjects.pending },
        {
          type: actionTypes.fetchProjects.fulfilled,
          payload: expect.any(Object)
        }
      ];
      moxios.wait(function() {
        let request = moxios.requests.mostRecent();
        request.respondWith({ status: 200, response: expect.any(Object) });
      });
      return store.dispatch(fetchProjects()).then(() => {
        // return of async actions
        const actionResult = store.getActions();
        expect(actionResult).toEqual(expectedActions);
      });
    });

    it(`creates FETCH_PROJECTS_REJECTED when fetching todos has been done unsuccessfully`, () => {
      const expectedActions = [
        { type: actionTypes.fetchProjects.pending },
        {
          type: actionTypes.fetchProjects.rejected,
          error: true,
          payload: expect.any(Object)
        }
      ];
      moxios.wait(function() {
        let request = moxios.requests.mostRecent();
        request.respondWith({ status: 400, response: expect.any(Object) });
      });
      return store.dispatch(fetchProjects()).catch(() => {
        // return of async actions
        const actionResult = store.getActions();
        expect(actionResult).toEqual(expectedActions);
      });
    });
  });
});
