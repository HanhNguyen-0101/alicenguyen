import axios from "axios";
import { IMediaResponse } from "../types/media.type";
import { baseService } from "./baseService";

class MediaManagementService extends baseService {
  get = () => {
    return axios.get<IMediaResponse>(this.getURL("media"), this.getHeader());
  };
  add = (data: any) => {
    let formData = new FormData();
    for (let key in data) {
      switch (key) {
        case "src":
          if (data.src) {
            formData.append("src", data.src);
          }
          break;
        case "enabled":
          formData.append("enabled", JSON.stringify(data.enabled));
          break;
        case "subCategoryId":
          formData.append("subCategoryId", data.subCategoryId);
          break;
        case "title":
          formData.append("title", data.title);
          break;
        case "description":
          formData.append("description", data.description);
          break;
        default:
          break;
      }
    }
    return axios.postForm<IMediaResponse>(
      this.getURL("media"),
      formData,
      this.getHeaderPost()
    );
  };
  edit = (data: any) => {
    let formData = new FormData();
    for (let key in data) {
      switch (key) {
        case "src":
          if (data.src) {
            formData.append("src", data.src);
          }
          break;
        case "enabled":
          formData.append("enabled", JSON.stringify(data.enabled));
          break;
        case "subCategoryId":
          formData.append("subCategoryId", data.subCategoryId);
          break;
        case "title":
          formData.append("title", data.title);
          break;
        case "description":
          formData.append("description", data.description);
          break;
        default:
          break;
      }
    }
    return axios.putForm<IMediaResponse>(
      this.getURL(`media/${data.id}`),
      formData,
      this.getHeaderPost()
    );
  };
  delete = (id: string) => {
    return axios.delete<any>(this.getURL(`media/${id}`), this.getHeader());
  };
  getById = (id: string) => {
    return axios.get<IMediaResponse>(
      this.getURL(`media/${id}`),
      this.getHeader()
    );
  };
  findByKeyword = (keyword: string) => {
    return axios.get<IMediaResponse>(
      this.getURL(`media/keyword/${keyword}`),
      this.getHeader()
    );
  };
}

export const MediaService = new MediaManagementService();
