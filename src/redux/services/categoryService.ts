import axios from "axios";
import { ICategoryModel, ICategoryResponse } from "../types/category.type";
import { baseService } from "./baseService";

class CategoryManagementService extends baseService {
  get = () => {
    return axios.get<ICategoryResponse>(
      this.getURL("category"),
      this.getHeader()
    );
  };
  add = (data: ICategoryModel) => {
    return axios.post<ICategoryResponse | null>(
      this.getURL("category"),
      data,
      this.getHeader()
    );
  };
  edit = (data: ICategoryModel) => {
    return axios.put<ICategoryResponse>(
      this.getURL(`category/${data.id}`),
      data,
      this.getHeader()
    );
  };
  delete = (id: string) => {
    return axios.delete<ICategoryResponse>(
      this.getURL(`category/${id}`),
      this.getHeader()
    );
  };
  getById = (id: string) => {
    return axios.get<ICategoryResponse | null>(
      this.getURL(`category/${id}`),
      this.getHeader()
    );
  };
  findByKeyword = (keyword: string) => {
    return axios.get<ICategoryResponse | null>(
      this.getURL(`category/keyword/${keyword}`),
      this.getHeader()
    );
  };
}

export const CategoryService = new CategoryManagementService();
