import {
  HIDE_DRAWER,
  RESET_CALLBACK_DRAWER,
  SET_CALLBACK_DRAWER,
  SET_CONTENT_DRAWER,
  SHOW_DRAWER,
} from "../actionTypes/drawer.actionTypes";

export const showDrawer = () => ({
  type: SHOW_DRAWER,
});

export const hideDrawer = () => ({
  type: HIDE_DRAWER,
});

export const setContentDrawer = (title: any, FormComponent: any) => ({
  type: SET_CONTENT_DRAWER,
  payload: { title, FormComponent },
});

export const setCallbackDrawer = (submitAction: any) => ({
  type: SET_CALLBACK_DRAWER,
  payload: { submitAction },
});

export const setResetCallbackDrawer = (resetAction: any) => ({
  type: RESET_CALLBACK_DRAWER,
  payload: { resetAction },
});
