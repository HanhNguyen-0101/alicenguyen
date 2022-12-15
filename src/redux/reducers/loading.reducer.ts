import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes/loading.actionTypes";

const initialState = {
  isLoading: false,
};

const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, isLoading: true };
    case HIDE_LOADING:
      return { ...state, isLoading: false };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
