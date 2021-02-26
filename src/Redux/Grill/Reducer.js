import * as Type from "./Types";

const initialState = {
  error: null,
  loader: false,
  grillData: {},
  remainingItems: [],
};

export const grillReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.GET_GRILL_ITEMS_LOADING:
      return {
        ...state,
        loader: true,
        error: null,
      };
    case Type.GET_GRILL_ITEMS_SUCCESS:
      return {
        ...state,
        error: null,
        loader: false,
        grillData: action.payload,
      };

    case Type.GET_GRILL_ITEMS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loader: false,
      };

    case Type.UPDATE_GRILL_ITEMS_SUCCESS:
      return { ...state, grillData: action.payload };

    case Type.UPDATE_REMAINING_GRILL_ITEMS:
      return { ...state, remainingItems: action.payload };

    default:
      return state;
  }
};
