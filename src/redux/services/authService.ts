import axios from "axios";
import { IAuthModel, IAuthResponse } from "../types/auth.type";
import { baseService } from "./baseService";

class AuthManagementService extends baseService {
  get = () => {
    return axios.get<IAuthResponse>(this.getURL("user"), this.getHeader());
  };
  add = (data: IAuthModel) => {
    return axios.post<IAuthResponse>(
      this.getURL("user"),
      data,
      this.getHeader()
    );
  };
  edit = (data: IAuthModel) => {
    return axios.put<IAuthResponse>(
      this.getURL(`user/${data.id}`),
      data,
      this.getHeader()
    );
  };
  delete = (id: string) => {
    return axios.delete<IAuthResponse>(
      this.getURL(`user/${id}`),
      this.getHeader()
    );
  };
  getById = (id: string) => {
    return axios.get<IAuthResponse>(
      this.getURL(`user/${id}`),
      this.getHeader()
    );
  };
  findByKeyword = (keyword: string) => {
    return axios.get<IAuthResponse>(
      this.getURL(`user/keyword/${keyword}`),
      this.getHeader()
    );
  };
  signup = (data: { email: string; password: string }) => {
    return axios.post<IAuthResponse>(
      this.getURL("user/signup"),
      data,
      this.getHeader()
    );
  };
  login = (data: { email: string; password: string }) => {
    return axios.post<IAuthResponse>(
      this.getURL("user/login"),
      data,
      this.getHeader()
    );
  };
  requestResetPassword = (data: { email: string }) => {
    return axios.put<IAuthResponse>(
      this.getURL("user/request/resetPassword"),
      data,
      this.getHeader()
    );
  };
  updateProfile = (data: IAuthModel) => {
    return axios.put<IAuthResponse>(
      this.getURL(`user/${data.id}`),
      data,
      this.getHeader()
    );
  };
  updateAvatar = (data: { src: any; id: number }) => {
    let formData = new FormData();
    if (data.src) {
      formData.append("src", data.src);
    }
    return axios.putForm<IAuthResponse>(
      this.getURL(`user/uploadAvatar/${data.id}`),
      formData,
      this.getHeaderPost()
    );
  };
  resetPassword = (data: {
    id: number;
    password: string;
    resetPasswordStatus: number;
  }) => {
    return axios.put<IAuthResponse>(
      this.getURL(`user/resetPassword/${data.id}`),
      data,
      this.getHeader()
    );
  };
}

export const AuthService = new AuthManagementService();
