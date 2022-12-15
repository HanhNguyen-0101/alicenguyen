import {
  HIDE_DRAWER,
  RESET_CALLBACK_DRAWER,
  SET_CALLBACK_DRAWER,
  SET_CONTENT_DRAWER,
  SHOW_DRAWER,
} from "../actionTypes/drawer.actionTypes";

const initialState = {
  visible: false,
  FormComponent: null,
  title: null,
  submitAction: () => {},
  resetAction: () => {},
};

const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_DRAWER:
      return { ...state, visible: true };
    case HIDE_DRAWER:
      return { ...state, visible: false };
    case SET_CALLBACK_DRAWER:
      return { ...state, submitAction: action.payload.submitAction };
    case RESET_CALLBACK_DRAWER:
      return { ...state, resetAction: action.payload.resetAction };
    case SET_CONTENT_DRAWER:
      return {
        ...state,
        title: action.payload.title,
        FormComponent: action.payload.FormComponent,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducers;
