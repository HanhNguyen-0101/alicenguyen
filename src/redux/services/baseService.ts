import { DOMAIN, TOKEN } from "../../utils/config/configSetting";

export class baseService {
  getURL(url: string) : string {
    return `${DOMAIN}${url}`;
  }
  getHeader() : any {
    return {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
        },
      }
  }
  getHeaderPost() : any {
    return {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
          "Content-Type": "multipart/form-data"
        },
      }
  }
}
