import {
  ADD_CONTACT_FAILURE,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  EDIT_CONTACT_FAILURE,
  EDIT_CONTACT_REQUEST,
  EDIT_CONTACT_SUCCESS,
  FIND_CONTACT_BY_KEYWORD_FAILURE,
  FIND_CONTACT_BY_KEYWORD_REQUEST,
  FIND_CONTACT_BY_KEYWORD_SUCCESS,
  GET_CONTACT_BY_ID_FAILURE,
  GET_CONTACT_BY_ID_REQUEST,
  GET_CONTACT_BY_ID_SUCCESS,
  GET_CONTACT_FAILURE,
  GET_CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
} from "../actionTypes/contact.actionTypes";

export interface IContactModel {
  id: string | number;
  name: string;
  content: string;
}
export interface IContactResponse {
  data: { data: any; message: string };
  status: number;
}
export interface ContactState {
  contactArr: Array<IContactModel>;
  error: string | null;
  contact: IContactModel | null;
  deleteMsg: string | null;
}
export interface IContactArrayModel {
  data: Array<IContactModel>;
}

// *****************GET ALL******************
export interface GetContactPayload {
  callback: any;
}
export interface GetContactSuccessPayload {
  data: Array<IContactModel>;
  message: string;
}
export interface GetContactFailurePayload {
  error: string;
}

export interface GetContactRequest {
  type: typeof GET_CONTACT_REQUEST;
  payload: GetContactPayload;
}
export type GetContactSuccess = {
  type: typeof GET_CONTACT_SUCCESS;
  payload: GetContactSuccessPayload;
};
export type GetContactFailure = {
  type: typeof GET_CONTACT_FAILURE;
  payload: GetContactFailurePayload;
};

// *****************ADD******************
export interface AddContactPayload {
  values: IContactModel;
  callback: any;
}
export interface AddContactSuccessPayload {
  data: IContactModel;
  message: string;
}
export interface AddContactFailurePayload {
  error: string;
}

export interface AddContactRequest {
  type: typeof ADD_CONTACT_REQUEST;
  payload: AddContactPayload;
}
export type AddContactSuccess = {
  type: typeof ADD_CONTACT_SUCCESS;
  payload: AddContactSuccessPayload;
};
export type AddContactFailure = {
  type: typeof ADD_CONTACT_FAILURE;
  payload: AddContactFailurePayload;
};

// *****************EDIT******************
export interface EditContactPayload {
  values: IContactModel;
  callback: any;
}
export interface EditContactSuccessPayload {
  data: IContactModel;
  message: string;
}
export interface EditContactFailurePayload {
  error: string;
}

export interface EditContactRequest {
  type: typeof EDIT_CONTACT_REQUEST;
  payload: EditContactPayload;
}
export type EditContactSuccess = {
  type: typeof EDIT_CONTACT_SUCCESS;
  payload: EditContactSuccessPayload;
};
export type EditContactFailure = {
  type: typeof EDIT_CONTACT_FAILURE;
  payload: EditContactFailurePayload;
};

// *****************DELETE******************
export interface DeleteContactPayload {
  values: { contactId: string | number };
  callback: any;
}
export interface DeleteContactSuccessPayload {
  data: { message: string };
  message: string;
}
export interface DeleteContactFailurePayload {
  error: string;
}

export interface DeleteContactRequest {
  type: typeof DELETE_CONTACT_REQUEST;
  payload: DeleteContactPayload;
}
export type DeleteContactSuccess = {
  type: typeof DELETE_CONTACT_SUCCESS;
  payload: DeleteContactSuccessPayload;
};
export type DeleteContactFailure = {
  type: typeof DELETE_CONTACT_FAILURE;
  payload: DeleteContactFailurePayload;
};

// *****************GET BY ID******************
export interface GetContactByIdPayload {
  values: { contactId: string | number };
  callback: any;
}
export interface GetContactByIdSuccessPayload {
  data: IContactModel | null;
  message: string;
}
export interface GetContactByIdFailurePayload {
  error: string;
}

export interface GetContactByIdRequest {
  type: typeof GET_CONTACT_BY_ID_REQUEST;
  payload: GetContactByIdPayload;
}
export type GetContactByIdSuccess = {
  type: typeof GET_CONTACT_BY_ID_SUCCESS;
  payload: GetContactByIdSuccessPayload;
};
export type GetContactByIdFailure = {
  type: typeof GET_CONTACT_BY_ID_FAILURE;
  payload: GetContactByIdFailurePayload;
};

// *****************FIND BY KEYWORD******************
export interface FindContactByKeywordPayload {
  values: { keyword: string | number };
  callback: any;
}
export interface FindContactByKeywordSuccessPayload {
  data: Array<IContactModel>;
  message: string;
}
export interface FindContactByKeywordFailurePayload {
  error: string;
}

export interface FindContactByKeywordRequest {
  type: typeof FIND_CONTACT_BY_KEYWORD_REQUEST;
  payload: FindContactByKeywordPayload;
}
export type FindContactByKeywordSuccess = {
  type: typeof FIND_CONTACT_BY_KEYWORD_SUCCESS;
  payload: FindContactByKeywordSuccessPayload;
};
export type FindContactByKeywordFailure = {
  type: typeof FIND_CONTACT_BY_KEYWORD_FAILURE;
  payload: FindContactByKeywordFailurePayload;
};

export type ContactActions =
  | GetContactRequest
  | GetContactSuccess
  | GetContactFailure
  | AddContactRequest
  | AddContactSuccess
  | AddContactFailure
  | EditContactRequest
  | EditContactSuccess
  | EditContactFailure
  | DeleteContactRequest
  | DeleteContactSuccess
  | DeleteContactFailure
  | GetContactByIdRequest
  | GetContactByIdSuccess
  | GetContactByIdFailure
  | FindContactByKeywordRequest
  | FindContactByKeywordSuccess
  | FindContactByKeywordFailure;
