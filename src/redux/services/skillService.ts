import axios from "axios";
import { ISkillModel, ISkillResponse } from "../types/skill.type";
import { baseService } from "./baseService";

class SkillManagementService extends baseService {
  get = () => {
    return axios.get<ISkillResponse>(this.getURL("skill"), this.getHeader());
  };
  add = (data: ISkillModel) => {
    return axios.post<ISkillResponse>(
      this.getURL("skill"),
      data,
      this.getHeader()
    );
  };
  edit = (data: ISkillModel) => {
    return axios.put<ISkillResponse>(
      this.getURL(`skill/${data.id}`),
      data,
      this.getHeader()
    );
  };
  delete = (id: string) => {
    return axios.delete<any>(this.getURL(`skill/${id}`), this.getHeader());
  };
  getById = (id: string) => {
    return axios.get<ISkillResponse>(
      this.getURL(`skill/${id}`),
      this.getHeader()
    );
  };
  findByKeyword = (keyword: string) => {
    return axios.get<ISkillResponse>(
      this.getURL(`skill/keyword/${keyword}`),
      this.getHeader()
    );
  };
}

export const SkillService = new SkillManagementService();
