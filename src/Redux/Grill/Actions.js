import { axiosInstance } from "../../Utils/HttpRequest";
import { GET_GRILL_ITEMS_SUCCESS, UPDATE_GRILL_ITEMS_SUCCESS, UPDATE_REMAINING_GRILL_ITEMS } from "./Types";

export const actionDispatch = (type, payload) => {
  return payload ? { type, payload } : { type };
};

export const getGrillItems = () => async (dispatch) => {
  const response = await axiosInstance.get('../mock/data.json');
  dispatch(actionDispatch(GET_GRILL_ITEMS_SUCCESS, response.data));
};

export const updateGrillItems = (grillData) => (dispatch) => {
  dispatch(actionDispatch(UPDATE_GRILL_ITEMS_SUCCESS, grillData));
};

export const updateRemainingItems = (payload) => (dispatch) => dispatch(actionDispatch(UPDATE_REMAINING_GRILL_ITEMS, payload));