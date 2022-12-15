import axios from "axios";
import {
  IOrganizationModel,
  IOrganizationResponse,
} from "../types/organization.type";
import { baseService } from "./baseService";

class OrganizationManagementService extends baseService {
  get = () => {
    return axios.get<IOrganizationResponse>(
      this.getURL("organization"),
      this.getHeader()
    );
  };
  add = (data: IOrganizationModel) => {
    return axios.post<IOrganizationResponse>(
      this.getURL("organization"),
      data,
      this.getHeader()
    );
  };
  edit = (data: IOrganizationModel) => {
    return axios.put<IOrganizationResponse>(
      this.getURL(`organization/${data.id}`),
      data,
      this.getHeader()
    );
  };
  delete = (id: string) => {
    return axios.delete<IOrganizationResponse>(
      this.getURL(`organization/${id}`),
      this.getHeader()
    );
  };
  getById = (id: string) => {
    return axios.get<IOrganizationResponse>(
      this.getURL(`organization/${id}`),
      this.getHeader()
    );
  };
  findByKeyword = (keyword: string) => {
    return axios.get<IOrganizationResponse>(
      this.getURL(`organization/keyword/${keyword}`),
      this.getHeader()
    );
  };
}

export const OrganizationService = new OrganizationManagementService();
