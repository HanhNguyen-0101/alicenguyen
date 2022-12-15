import axios from "axios";
import { IProjectResponse, IProjectModel } from "../types/project.type";
import { baseService } from "./baseService";

class ProjectManagementService extends baseService {
  get = () => { return axios.get<IProjectResponse>(this.getURL("project"), this.getHeader()); };
  add = (data: IProjectModel) => { return axios.post<IProjectResponse>(this.getURL("project"), data, this.getHeader()); };
  edit = (data: IProjectModel) => { return axios.put<IProjectResponse>(this.getURL(`project/${data.id}`), data, this.getHeader()); };
  delete = (id: string) => { return axios.delete<IProjectResponse>(this.getURL(`project/${id}`), this.getHeader()); };
  getById = (id: string) => { return axios.get<IProjectResponse>(this.getURL(`project/${id}`), this.getHeader()); };
  findByKeyword = (keyword: string) => { return axios.get<IProjectResponse>(this.getURL(`project/keyword/${keyword}`), this.getHeader()); };
}

export const ProjectService = new ProjectManagementService();
