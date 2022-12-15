import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ContactState } from "../../../redux/reducers/root.reducer";
import { deleteContactRequest, findContactByKeywordRequest, getContactRequest } from "../../../redux/actions/contact.action";
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { IContactModel } from "../../../redux/types/contact.type";
import { Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { AdminPage, callback, callbackObj } from "../../global/Global";
import { setContentDrawer, showDrawer } from "../../../redux/actions/drawer.action";
import { AddContactForm } from "../../forms/AddContactForm";
import { EditContactForm } from "../../forms/EditContactForm";

export const ContactDashboard: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const { contactArr } = useSelector((state: ContactState) => state.contact);
  const handleEdit = async (item: IContactModel) => {
    await dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          edit contact
        </span>,
        <EditContactForm contact={item} />
      )
    );
    await dispatch(showDrawer());
  }
  const handleAdd = () => {
    dispatch(showDrawer());
    dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          add contact
        </span>,
        <AddContactForm />
      )
    );
  }
  const handleDelete = (item: IContactModel) => {
    dispatch(deleteContactRequest(callbackObj({ contactId: item.id }, callback("Inside callback after delete contact"))));
  }
  const handleSearch = (value: string | null) => {
    if (value) {
      dispatch(findContactByKeywordRequest(callbackObj({ keyword: value }, callback("Inside callback after find contact by keyword"))));
    } else {
      dispatch(getContactRequest(callbackObj(null, callback("Inside callback after get all contact"))));
    }
  };
  const columns: ColumnsType<IContactModel> = [
    {
      title: <div className="uppercase opacity-60 text-xs">id</div>,
      width: 50,
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
      defaultSortOrder: 'descend',
      sorter: (a, b) => {
        return Number(a.id) - Number(b.id);
      },
      render: (text) => <span>{text}</span>
    },
    {
      title: <div className="uppercase opacity-60 text-xs">name</div>,
      width: 50,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      defaultSortOrder: 'descend',
      sorter: {
        compare: (a, b) => {
          let nameA = a.name.toLowerCase().trim();
          let nameB = b.name.toLowerCase().trim();
          if (nameA > nameB) {
            return 1;
          }
          return -1;
        },
        multiple: 1,
      },
      render: (text) => <span className="font-medium">{text}</span>
    },
    {
      title: <div className="uppercase opacity-60 text-xs">content</div>,
      dataIndex: 'content',
      key: 'content',
      width: 150,
      render: (text) => <div className="font-medium max-h-60 overflow-y-auto" dangerouslySetInnerHTML={{ __html: text }} />
    },
    {
      title: <div className="uppercase opacity-60 text-center text-xs">action</div>,
      key: 'operation',
      fixed: 'right',
      width: 25,
      render: (text, i) => {
        return <div className="flex items-center text-xl align-middle gap-6 justify-center">
          <button className="border-none focus:outline-none font-medium" onClick={() => handleEdit(i)}>
            <EditFilled className="text-blue-800" />
          </button>
          <Popconfirm title="Are you sure want to delete this line？" okText="Yes" cancelText="No" onConfirm={() => handleDelete(i)}>
            <button className="border-none focus:outline-none font-medium">
              <DeleteFilled className="text-red-700" />
            </button>
          </Popconfirm>
        </div>
      },
    },
  ];

  useEffect(() => {
    dispatch(getContactRequest(callbackObj(null, callback("Inside callback after get all contact"))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminPage columns={columns} title="contact" dataSource={contactArr} onAdd={handleAdd} onSearch={handleSearch} />
  );
};
