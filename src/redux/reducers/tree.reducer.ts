import {
  ALIGN_TREE_CENTER,
  ALIGN_TREE_LEFT,
  ALIGN_TREE_RIGHT,
} from "../actionTypes/tree.actionTypes";

const initialState = {
  alignTree: "center",
};

const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case ALIGN_TREE_CENTER:
      return { ...state, alignTree: "center" };
    case ALIGN_TREE_LEFT:
      return { ...state, alignTree: "left" };
    case ALIGN_TREE_RIGHT:
      return { ...state, alignTree: "right" };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
