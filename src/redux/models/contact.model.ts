import _ from "lodash";
import { IContactModel } from "../types/contact.type";

class ContactModel implements IContactModel {
  public id: string;
  public name: string;
  public content: string;

  constructor(id: string | null, name: string | null, content: string | null) {
    this.id = id || "";
    this.name = name || "";
    this.content = content || "";
  }
}

export { ContactModel };

const filterContactByNameList = (contacts: Array<IContactModel>, nameList: Array<string>) => {
  return _.filter(
    contacts,
    function (o: IContactModel) {
      return _.includes(nameList, o.name.toLowerCase());
    }
  );
};
export const supportFunction = {
  filterContactByNameList,
};
