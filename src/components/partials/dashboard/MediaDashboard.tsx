import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MediaState, SubCategoryState } from "../../../redux/reducers/root.reducer";
import { deleteMediaRequest, findMediaByKeywordRequest, getMediaRequest } from "../../../redux/actions/media.action";
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { IMediaModel } from "../../../redux/types/media.type";
import { Popconfirm, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getSubCategoryRequest } from "../../../redux/actions/subCategory.action";
import { AdminPage, callback, callbackObj, filterFuction } from "../../global/Global";
import { setContentDrawer, showDrawer } from "../../../redux/actions/drawer.action";
import { EditMediaForm } from "../../forms/EditMediaForm";
import { AddMediaForm } from "../../forms/AddMediaForm";

export const MediaDashboard: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const { subCategoryArr } = useSelector((state: SubCategoryState) => state.subCategory);
  const { mediaArr } = useSelector((state: MediaState) => state.media);
  const handleEdit = async (item: IMediaModel) => {
    await dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          edit media
        </span>,
        <EditMediaForm media={item} />
      )
    );
    await dispatch(showDrawer());
  }
  const handleAdd = () => {
    dispatch(showDrawer());
    dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          add media
        </span>,
        <AddMediaForm />
      )
    );
  }
  const handleDelete = (item: IMediaModel) => {
    dispatch(deleteMediaRequest(callbackObj({ mediaId: item.id }, callback("Inside callback after delete media"))));
  }
  const handleSearch = (value: string | null) => {
    if (value) {
      dispatch(findMediaByKeywordRequest(callbackObj({ keyword: value }, callback("Inside callback after find media by keyword"))));
    } else {
      dispatch(getMediaRequest(callbackObj(null, callback("Inside callback after get all media"))));
    }
  };
  const filterData = filterFuction(subCategoryArr, "media");
  const columns: ColumnsType<IMediaModel> = [
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
      title: <div className="uppercase opacity-60 text-xs">enabled</div>,
      width: 50,
      dataIndex: 'enabled',
      key: 'enabled',
      fixed: 'left',
      filters: [
        { text: "Enabled", value: true },
        { text: "Disabled", value: false },
      ],
      onFilter: (value, record) => {
        return record.enabled === value;
      },
      render: (text) => <Tag color={text ? "green" : "orange"} className="font-medium uppercase">{text ? "enabled" : "disabled"}</Tag>
    },
    {
      title: <div className="uppercase opacity-60 text-xs">title</div>,
      width: 50,
      dataIndex: 'title',
      key: 'title',
      render: (text) => <span className="font-medium">{text}</span>
    },
    {
      title: <div className="uppercase opacity-60 text-xs">src</div>,
      width: 200,
      dataIndex: 'src',
      key: 'src',
      render: (text) => {
        let fileType = "img";
        if (text.toLowerCase().includes(".pdf")) {
          fileType = "pdf";
        }
        if (text.toLowerCase().includes(".mp3") || text.toLowerCase().includes(".ogg")) {
          fileType = "video";
        }
        return <>
          {fileType === "img" && <img src={text} alt={text} />}
          {fileType === "pdf" && <iframe src={text} title={text} width="100%"></iframe>}
          {fileType === "video" && <iframe src={text} title={text} width="100%"></iframe>}
        </>
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
          <Popconfirm title={<div className="max-w-xs">
            <p className="text-red-700 font-medium">Are you sure want to delete this line?</p>
            <p className="pt-2 text-yellow-600 opacity-80 text-xs"><span className="text-black">Note: </span>Blog, User and Project data (thumnail/avatarimages) also will be removed!</p>
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
    dispatch(getMediaRequest(callbackObj(null, callback("Inside callback after get all media"))));
    dispatch(getSubCategoryRequest(callbackObj(null, callback("Inside callback after get all sub category"))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminPage columns={columns} title="media" dataSource={mediaArr} onAdd={handleAdd} onSearch={handleSearch} />
  );
};
