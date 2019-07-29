import * as types from "../actionTypes";
import api from "../../api";

export function fetchProjects(sortValue) {
  return dispatch =>
    dispatch({
      type: types.fetchProjects.default,
      payload: api.get(`/projects?_sort=${sortValue}&_order=desc`)
    });
}
