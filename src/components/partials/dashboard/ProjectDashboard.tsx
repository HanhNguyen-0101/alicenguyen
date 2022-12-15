import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MediaState, ProjectState, SubCategoryState } from "../../../redux/reducers/root.reducer";
import { deleteProjectRequest, findProjectByKeywordRequest, getProjectRequest } from "../../../redux/actions/project.action";
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { IProjectModel } from "../../../redux/types/project.type";
import { Image, Popconfirm, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import _ from "lodash";
import { getSubCategoryRequest } from "../../../redux/actions/subCategory.action";
import moment from "moment";
import { getMediaRequest } from "../../../redux/actions/media.action";
import { AdminPage, callback, callbackObj, filterFuction } from "../../global/Global";
import { setContentDrawer, showDrawer } from "../../../redux/actions/drawer.action";
import { EditProjectForm } from "../../forms/EditProjectForm";
import { AddProjectForm } from "../../forms/AddProjectForm";
import { IMediaModel } from "../../../redux/types/media.type";

export const ProjectDashboard: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const { projectArr } = useSelector((state: ProjectState) => state.project);
  const { subCategoryArr } = useSelector((state: SubCategoryState) => state.subCategory);
  const { mediaArr } = useSelector((state: MediaState) => state.media);
  const handleEdit = async (item: IProjectModel) => {
    await dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          edit project
        </span>,
        <EditProjectForm project={item} />
      )
    );
    await dispatch(showDrawer());
  }
  const handleAdd = () => {
    dispatch(showDrawer());
    dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          add project
        </span>,
        <AddProjectForm />
      )
    );
  }
  const handleDelete = (item: IProjectModel) => {
    dispatch(deleteProjectRequest(callbackObj({ projectId: item.id }, callback("Inside callback after delete project"))));
  }
  const handleSearch = (value: string | null) => {
    if (value) {
      dispatch(findProjectByKeywordRequest(callbackObj({ keyword: value }, callback("Inside callback after find project by keyword"))));
    } else {
      dispatch(getProjectRequest(callbackObj(null, callback("Inside callback after get all project"))));
    }
  };
  const filterData = filterFuction(subCategoryArr, "project");
  const columns: ColumnsType<IProjectModel> = [
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
      title: <div className="uppercase opacity-60 text-xs">subCategory</div>,
      dataIndex: 'subCategory',
      key: 'subCategory',
      width: 15,
      fixed: 'left',
      filters: filterData,
      onFilter: (value, record) => {
        return record.subCategoryId === value;
      },
      render: (text) => <Tag color="green" className="font-medium uppercase">{text.name}</Tag>
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
      render: (text, { link }) => <div className="text-center">
        <p className="font-medium text-orange-600 text-base">{text}</p>
        {link && <p className="pt-1.5">
          <span className="font-medium">Link: </span>
          <a className="hover:text-yellow-400" href={link}>{link}</a>
        </p>}
      </div>
    },
    {
      title: <div className="uppercase opacity-60 text-xs">organization</div>,
      dataIndex: 'organization',
      key: 'organization',
      width: 15,
      render: (text, { date }) => {
        let dateStr = "";
        if (date) {
          const dateArr = JSON.parse(date);
          dateStr = `${moment(dateArr[0]).format("MMM YYYY")} - ${moment(dateArr[1]).format("MMM YYYY")}`;
        }
        return <div className="text-center"><p className="font-medium">{text.name}</p>{dateStr}</div>
      }
    },
    {
      title: <div className="uppercase opacity-60 text-xs">technical</div>,
      dataIndex: 'technical',
      key: 'technical',
      width: 15,
      render: (text) => {
        let arr = [];
        if (text) {
          arr = JSON.parse(text);
        }
        return <div>
          {arr.map((i: string, idx: number) => <Tag key={idx} color="orange" className="font-medium m-1 uppercase">{i}</Tag>)}
        </div>
      }
    },
    {
      title: <div className="uppercase opacity-60 text-xs">members</div>,
      dataIndex: 'members',
      key: 'members',
      width: 15,
      render: (text) => <div className="text-center">{text}</div>
    },
    {
      title: <div className="uppercase opacity-60 text-xs">images</div>,
      dataIndex: 'images',
      key: 'images',
      width: 15,
      render: (text) => {
        return text && <div className="text-center">{_.map(JSON.parse(text), (i: any) => {
          const item = _.find(mediaArr, ((j: IMediaModel) => j.id === i));
          if (item) {
            return <div className="m-2"><Image src={item.src} width={60} /></div>;
          } else {
            return "";
          }
        })}</div>
      }
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
    dispatch(getMediaRequest(callbackObj(null, callback("Inside callback after get all media"))));
    dispatch(getProjectRequest(callbackObj(null, callback("Inside callback after get all project"))));
    dispatch(getSubCategoryRequest(callbackObj(null, callback("Inside callback after get all sub category"))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminPage columns={columns} title="project" dataSource={projectArr} onAdd={handleAdd} onSearch={handleSearch} />
  );
};
