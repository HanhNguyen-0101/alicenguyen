import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SkillState } from "../../../redux/reducers/root.reducer";
import { deleteSkillRequest, findSkillByKeywordRequest, getSkillRequest } from "../../../redux/actions/skill.action";
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { ISkillModel } from "../../../redux/types/skill.type";
import { Popconfirm, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { setContentDrawer, showDrawer } from "../../../redux/actions/drawer.action";
import { AdminPage, callback, callbackObj } from "../../global/Global";
import { EditSkillForm } from "../../forms/EditSkillForm";
import { AddSkillForm } from "../../forms/AddSkillForm";

export const SkillDashboard: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const { skillArr } = useSelector((state: SkillState) => state.skill);
  const handleEdit = async (item: ISkillModel) => {
    await dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          edit skill
        </span>,
        <EditSkillForm skill={item} />
      )
    );
    await dispatch(showDrawer());
  }
  const handleAdd = () => {
    dispatch(showDrawer());
    dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          add skill
        </span>,
        <AddSkillForm />
      )
    );
  }
  const handleDelete = (item: ISkillModel) => {
    dispatch(deleteSkillRequest(callbackObj({ skillId: item.id }, callback("Inside callback after delete skill"))));
  }
  const handleSearch = (value: string | null) => {
    if (value) {
      dispatch(findSkillByKeywordRequest(callbackObj({ keyword: value }, callback("Inside callback after find skill by keyword"))));
    } else {
      dispatch(getSkillRequest(callbackObj(null, callback("Inside callback after get all skill"))));
    }
  };
  const columns: ColumnsType<ISkillModel> = [
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
      title: <div className="uppercase opacity-60 text-xs">rate</div>,
      dataIndex: 'rate',
      key: 'rate',
      width: 15,
      render: (text) => <Tag color="orange" className="font-medium">{`${text}%`}</Tag>
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
    dispatch(getSkillRequest(callbackObj(null, callback("Inside callback after get all skill"))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminPage columns={columns} title="skill" dataSource={skillArr} onAdd={handleAdd} onSearch={handleSearch} />
  );
};
