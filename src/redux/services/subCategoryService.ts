import axios from "axios";
import { ISubCategoryModel, ISubCategoryResponse } from "../types/subCategory.type";
import { baseService } from "./baseService";

class SubCategoryManagementService extends baseService {
  get = () => { return axios.get<ISubCategoryResponse>(this.getURL("subCategory"), this.getHeader()); };
  add = (data: ISubCategoryModel) => { return axios.post<ISubCategoryResponse>(this.getURL("subCategory"), data, this.getHeader()); };
  edit = (data: ISubCategoryModel) => { return axios.put<ISubCategoryResponse>(this.getURL(`subCategory/${data.id}`), data, this.getHeader()); };
  delete = (id: string) => { return axios.delete<ISubCategoryResponse>(this.getURL(`subCategory/${id}`), this.getHeader()); };
  getById = (id: string) => { return axios.get<ISubCategoryResponse>(this.getURL(`subCategory/${id}`), this.getHeader()); };
  findByKeyword = (keyword: string) => { return axios.get<ISubCategoryResponse>(this.getURL(`subCategory/keyword/${keyword}`), this.getHeader()); };
}

export const SubCategoryService = new SubCategoryManagementService();
