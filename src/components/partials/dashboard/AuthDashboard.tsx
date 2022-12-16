import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AuthState, SubCategoryState } from "../../../redux/reducers/root.reducer";
import { deleteAuthRequest, findAuthByKeywordRequest, getAuthByIdRequest, getAuthRequest } from "../../../redux/actions/auth.action";
import { EditFilled, DeleteFilled, LockOutlined } from '@ant-design/icons';
import { IAuthModel } from "../../../redux/types/auth.type";
import { Image, Popconfirm, Space, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getSubCategoryRequest } from "../../../redux/actions/subCategory.action";
import { AdminPage, callback, callbackObj, filterFuction } from "../../global/Global";
import { setContentDrawer, showDrawer } from "../../../redux/actions/drawer.action";
import { EditAuthForm } from "../../forms/EditAuthForm";
import { AddAuthForm } from "../../forms/AddAuthForm";
import { ResetPasswordAuthForm } from "../../forms/ResetPasswordAuthForm";

export const AuthDashboard: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const { authArr, auth } = useSelector((state: AuthState) => state.auth);
  const { subCategoryArr } = useSelector((state: SubCategoryState) => state.subCategory);
  const handleEdit = async (item: IAuthModel) => {
    await dispatch(getAuthByIdRequest(callbackObj({ authId: item.id }, callback("Inside callback after get auth by id"))));
    await dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          edit auth
        </span>,
        <EditAuthForm auth={auth} />
      )
    );
    await dispatch(showDrawer());
  }
  const handleResetPassword = async (item: IAuthModel) => {
    await dispatch(getAuthByIdRequest(callbackObj({ authId: item.id }, callback("Inside callback after get auth by id"))));
    await dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          reset password auth
        </span>,
        <ResetPasswordAuthForm auth={auth} />
      )
    );
    await dispatch(showDrawer());
  }
  const handleAdd = () => {
    dispatch(showDrawer());
    dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          add auth
        </span>,
        <AddAuthForm />
      )
    );
  }
  const handleDelete = (item: IAuthModel) => {
    dispatch(deleteAuthRequest(callbackObj({ authId: item.id }, callback("Inside callback after delete auth"))));
  }
  const handleSearch = (value: string | null) => {
    if (value) {
      dispatch(findAuthByKeywordRequest(callbackObj({ keyword: value }, callback("Inside callback after find auth by keyword"))));
    } else {
      dispatch(getAuthRequest(callbackObj(null, callback("Inside callback after get all auth"))));
    }
  };
  const filterData = filterFuction(subCategoryArr, "user");
  const resetPasswordStatusFilterData = filterFuction(subCategoryArr, "reset password");

  const columns: ColumnsType<IAuthModel> = [
    {
      title: <div className="uppercase opacity-60 text-xs">id</div>,
      width: 15,
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
      title: <div className="uppercase opacity-60 text-xs">status</div>,
      dataIndex: 'statusObj',
      key: 'statusObj',
      width: 15,
      fixed: 'left',
      filters: filterData,
      onFilter: (value, record) => {
        return record.status === value;
      },
      render: (text) => <Tag color="green" className="font-medium uppercase">{text.name}</Tag>
    },
    {
      title: <div className="uppercase opacity-60 text-xs">reset password status</div>,
      dataIndex: 'resetPasswordStatusObj',
      key: 'resetPasswordStatusObj',
      width: 150,
      fixed: 'left',
      filters: resetPasswordStatusFilterData,
      onFilter: (value, record) => {
        return record.resetPasswordStatus === value;
      },
      render: (text, i) => {
        return <Space className="flex items-center">
          {text.name.toLowerCase().includes("waiting") && <button className="border-none focus:outline-none font-medium" onClick={() => handleResetPassword(i)}>
            <LockOutlined className="text-red-500 pb-1 text-base" />
          </button>}
          <div className="font-medium uppercase text-green-600 text-xs">{text.name}</div>
        </Space>
      }
    },
    {
      title: <div className="uppercase opacity-60 text-xs">email</div>,
      width: 50,
      dataIndex: 'email',
      key: 'email',
      fixed: 'left',
      defaultSortOrder: 'descend',
      sorter: {
        compare: (a, b) => {
          let emailA = a.email.toLowerCase().trim();
          let emailB = b.email.toLowerCase().trim();
          if (emailA > emailB) {
            return 1;
          }
          return -1;
        },
        multiple: 1,
      },
      render: (text) => <span className="font-medium">{text}</span>
    },
    {
      title: <div className="uppercase opacity-60 text-xs">password</div>,
      dataIndex: 'password',
      width: 208,
      key: 'password',
      render: (text) => <div className="w-52 whitespace-nowrap overflow-hidden text-ellipsis">{text}</div>
    },
    {
      title: <div className="uppercase opacity-60 text-xs">avatar</div>,
      dataIndex: 'avatarObj',
      key: 'avatarObj',
      width: 50,
      render: (text) => <div className="text-center"><Image width={100} src={text ? text.src : "images/global/no-image.png"} /></div>
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
    dispatch(getAuthRequest(callbackObj(null, callback("Inside callback after get all auth"))));
    dispatch(getSubCategoryRequest(callbackObj(null, callback("Inside callback after get all sub category"))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminPage columns={columns} title="auth" dataSource={authArr} onAdd={handleAdd} onSearch={handleSearch} />
  );
};
