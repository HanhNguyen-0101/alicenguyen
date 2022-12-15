import axios from "axios";
import { IContactModel, IContactResponse } from "../types/contact.type";
import { baseService } from "./baseService";

class ContactManagementService extends baseService {
  get = () => {
    return axios.get<IContactResponse>(
      this.getURL("contact"),
      this.getHeader()
    );
  };
  add = (data: IContactModel) => {
    return axios.post<IContactResponse>(
      this.getURL("contact"),
      data,
      this.getHeader()
    );
  };
  edit = (data: IContactModel) => {
    return axios.put<IContactResponse>(
      this.getURL(`contact/${data.id}`),
      data,
      this.getHeader()
    );
  };
  delete = (id: string) => {
    return axios.delete<IContactResponse>(
      this.getURL(`contact/${id}`),
      this.getHeader()
    );
  };
  getById = (id: string) => {
    return axios.get<IContactResponse>(
      this.getURL(`contact/${id}`),
      this.getHeader()
    );
  };
  findByKeyword = (keyword: string) => {
    return axios.get<IContactResponse>(
      this.getURL(`contact/keyword/${keyword}`),
      this.getHeader()
    );
  };
}

export const ContactService = new ContactManagementService();
