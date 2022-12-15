import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BlogState, SubCategoryState } from "../../../redux/reducers/root.reducer";
import { deleteBlogRequest, findBlogByKeywordRequest, getBlogByIdRequest, getBlogRequest } from "../../../redux/actions/blog.action";
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { IBlogModel } from "../../../redux/types/blog.type";
import { Image, Popconfirm, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getSubCategoryRequest } from "../../../redux/actions/subCategory.action";
import { AdminPage, callback, callbackObj, filterFuction } from "../../global/Global";
import { setContentDrawer, showDrawer } from "../../../redux/actions/drawer.action";
import { EditBlogForm } from "../../forms/EditBlogForm";
import { AddBlogForm } from "../../forms/AddBlogForm";
import moment from "moment";

export const BlogDashboard: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const { blogArr, blog } = useSelector((state: BlogState) => state.blog);
  const { subCategoryArr } = useSelector((state: SubCategoryState) => state.subCategory);
  const handleEdit = async (item: IBlogModel) => {
    await dispatch(getBlogByIdRequest(callbackObj({ blogId: item.id }, callback("Inside callback after get blog by id"))));
    await dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          edit blog
        </span>,
        <EditBlogForm blog={blog} />
      )
    );
    await dispatch(showDrawer());
  }
  const handleAdd = () => {
    dispatch(showDrawer());
    dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          add blog
        </span>,
        <AddBlogForm />
      )
    );
  }
  const handleDelete = (item: IBlogModel) => {
    dispatch(deleteBlogRequest(callbackObj({ blogId: item.id }, callback("Inside callback after delete blog"))));
  }
  const handleSearch = (value: string | null) => {
    if (value) {
      dispatch(findBlogByKeywordRequest(callbackObj({ keyword: value }, callback("Inside callback after find blog by keyword"))));
    } else {
      dispatch(getBlogRequest(callbackObj(null, callback("Inside callback after get all blog"))));
    }
  };
  const filterData = filterFuction(subCategoryArr, "blog");
  const columns: ColumnsType<IBlogModel> = [
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
      title: <div className="uppercase opacity-60 text-xs">created At</div>,
      width: 15,
      dataIndex: 'createdAt',
      key: 'createdAt',
      fixed: 'left',
      defaultSortOrder: 'descend',
      sorter: {
        compare: (a, b) => {
          let createdAtA = a.createdAt.toLowerCase().trim();
          let createdAtB = b.createdAt.toLowerCase().trim();
          if (createdAtA > createdAtB) {
            return 1;
          }
          return -1;
        },
        multiple: 1,
      },
      render: (text) => <span>{moment(text).format("MMM DD, YYYY")}</span>
    },
    {
      title: <div className="uppercase opacity-60 text-xs">updated At</div>,
      width: 15,
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      fixed: 'left',
      defaultSortOrder: 'descend',
      sorter: {
        compare: (a, b) => {
          let updatedAtA = a.updatedAt.toLowerCase().trim();
          let updatedAtB = b.updatedAt.toLowerCase().trim();
          if (updatedAtA > updatedAtB) {
            return 1;
          }
          return -1;
        },
        multiple: 1,
      },
      render: (text) => <span>{moment(text).format("MMM DD, YYYY")}</span>
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
      title: <div className="uppercase opacity-60 text-xs">title</div>,
      width: 50,
      dataIndex: 'title',
      key: 'title',
      fixed: 'left',
      defaultSortOrder: 'descend',
      sorter: {
        compare: (a, b) => {
          let titleA = a.title.toLowerCase().trim();
          let titleB = b.title.toLowerCase().trim();
          if (titleA > titleB) {
            return 1;
          }
          return -1;
        },
        multiple: 1,
      },
      render: (text) => <span className="font-medium">{text}</span>
    },
    {
      title: <div className="uppercase opacity-60 text-xs">subTitle</div>,
      dataIndex: 'subTitle',
      key: 'subTitle',
      width: 50,
      defaultSortOrder: 'descend',
      sorter: {
        compare: (a, b) => {
          let subTitleA = a.subTitle.toLowerCase().trim();
          let subTitleB = b.subTitle.toLowerCase().trim();
          if (subTitleA > subTitleB) {
            return 1;
          }
          return -1;
        },
        multiple: 1,
      },
      render: (text) => <span>{text}</span>
    },
    {
      title: <div className="uppercase opacity-60 text-xs">thumnail</div>,
      dataIndex: 'media',
      key: 'media',
      width: 50,
      render: (text) => <div className="text-center"><Image width={100} src={text.src} /></div>
    },
    {
      title: <div className="uppercase opacity-60 text-xs">description</div>,
      dataIndex: 'description',
      key: 'description',
      width: 150,
      render: (text) => <div className="max-h-60 overflow-y-auto" dangerouslySetInnerHTML={{ __html: text }} />
    },
    {
      title: <div className="uppercase opacity-60 text-xs">content</div>,
      dataIndex: 'content',
      key: 'content',
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
    dispatch(getBlogRequest(callbackObj(null, callback("Inside callback after get all blog"))));
    dispatch(getSubCategoryRequest(callbackObj(null, callback("Inside callback after get all sub category"))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminPage columns={columns} title="blog" dataSource={blogArr} onAdd={handleAdd} onSearch={handleSearch} />
  );
};
