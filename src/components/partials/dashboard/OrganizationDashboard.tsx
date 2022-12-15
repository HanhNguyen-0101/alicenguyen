import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { OrganizationState } from "../../../redux/reducers/root.reducer";
import { deleteOrganizationRequest, findOrganizationByKeywordRequest, getOrganizationRequest } from "../../../redux/actions/organization.action";
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { IOrganizationModel } from "../../../redux/types/organization.type";
import { Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { AdminPage, callback, callbackObj } from "../../global/Global";
import { setContentDrawer, showDrawer } from "../../../redux/actions/drawer.action";
import { AddOrganizationForm } from "../../forms/AddOrganizationForm";
import { EditOrganizationForm } from "../../forms/EditOrganizationForm";

export const OrganizationDashboard: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const { organizationArr } = useSelector((state: OrganizationState) => state.organization);
  const handleEdit = async (item: IOrganizationModel) => {
    await dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          edit organization
        </span>,
        <EditOrganizationForm organization={item} />
      )
    );
    await dispatch(showDrawer());
  }
  const handleAdd = () => {
    dispatch(showDrawer());
    dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          add organization
        </span>,
        <AddOrganizationForm />
      )
    );
  }
  const handleDelete = (item: IOrganizationModel) => {
    dispatch(deleteOrganizationRequest(callbackObj({ organizationId: item.id }, callback("Inside callback after delete organization"))));
  }
  const handleSearch = (value: string | null) => {
    if (value) {
      dispatch(findOrganizationByKeywordRequest(callbackObj({ keyword: value }, callback("Inside callback after find organization by keyword"))));
    } else {
      dispatch(getOrganizationRequest(callbackObj(null, callback("Inside callback after get all organization"))));
    }
  };
  const columns: ColumnsType<IOrganizationModel> = [
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
      title: <div className="uppercase opacity-60 text-xs">description</div>,
      dataIndex: 'description',
      key: 'description',
      width: 150,
      render: (text) => <div className="max-h-60 overflow-y-auto" dangerouslySetInnerHTML={{ __html: text }} />
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
          <Popconfirm title={<div className="max-w-xs">
            <p className="text-red-500 font-medium">Are you sure want to delete this line?</p>
            <p className="pt-2 text-yellow-600 opacity-80 text-xs"><span className="text-black">Note: </span>Project data (organizationId) also will be removed!</p>
          </div>} okText="Yes" cancelText="No" onConfirm={() => handleDelete(i)}>
            <button className="border-none focus:outline-none font-medium">
              <DeleteFilled className="text-red-700" />
            </button>
          </Popconfirm>
        </div>
      },
    },
  ];

  useEffect(() => {
    dispatch(getOrganizationRequest(callbackObj(null, callback("Inside callback after get all organization"))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminPage columns={columns} title="organization" dataSource={organizationArr} onAdd={handleAdd} onSearch={handleSearch} />
  );
};
