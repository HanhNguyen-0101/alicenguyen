import axios from "axios";
import { IBlogModel, IBlogResponse } from "../types/blog.type";
import { baseService } from "./baseService";

class BlogManagementService extends baseService {
  get = () => {
    return axios.get<IBlogResponse>(this.getURL("blog"), this.getHeader());
  };
  add = (data: IBlogModel) => {
    return axios.post<IBlogResponse>(
      this.getURL("blog"),
      data,
      this.getHeader()
    );
  };
  edit = (data: IBlogModel) => {
    return axios.put<IBlogResponse>(
      this.getURL(`blog/${data.id}`),
      data,
      this.getHeader()
    );
  };
  delete = (id: string) => {
    return axios.delete<any>(this.getURL(`blog/${id}`), this.getHeader());
  };
  getById = (id: string) => {
    return axios.get<IBlogResponse>(
      this.getURL(`blog/${id}`),
      this.getHeader()
    );
  };
  findByKeyword = (keyword: string) => {
    return axios.get<IBlogResponse>(
      this.getURL(`blog/keyword/${keyword}`),
      this.getHeader()
    );
  };
  findBySubCategoryId = (id: string | number) => {
    return axios.get<IBlogResponse>(
      this.getURL(`blog/subCategoryId/${id}`),
      this.getHeader()
    );
  };
}

export const BlogService = new BlogManagementService();
