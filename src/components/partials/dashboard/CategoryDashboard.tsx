import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CategoryState } from "../../../redux/reducers/root.reducer";
import { deleteCategoryRequest, findCategoryByKeywordRequest, getCategoryRequest } from "../../../redux/actions/category.action";
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import { ICategoryModel } from "../../../redux/types/category.type";
import { Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { AdminPage, callback, callbackObj } from "../../global/Global";
import { setContentDrawer, showDrawer } from "../../../redux/actions/drawer.action";
import { EditCategoryForm } from "../../forms/EditCategoryForm";
import { AddCategoryForm } from "../../forms/AddCategoryForm";

export const CategoryDashboard: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const { categoryArr } = useSelector((state: CategoryState) => state.category);
  const handleEdit = async (item: ICategoryModel) => {
    await dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          edit category
        </span>,
        <EditCategoryForm category={item} />
      )
    );
    await dispatch(showDrawer());
  }
  const handleAdd = () => {
    dispatch(showDrawer());
    dispatch(
      setContentDrawer(
        <span className="uppercase text-xl text-alibus">
          add category
        </span>,
        <AddCategoryForm />
      )
    );
  }
  const handleDelete = (item: ICategoryModel) => {
    dispatch(deleteCategoryRequest(callbackObj({ categoryId: item.id }, callback("Inside callback after delete category"))));
  }
  const handleSearch = (value: string | null) => {
    if (value) {
      dispatch(findCategoryByKeywordRequest(callbackObj({ keyword: value }, callback("Inside callback after find category by keyword"))));
    } else {
      dispatch(getCategoryRequest(callbackObj(null, callback("Inside callback after get all category"))));
    }
  };
  const columns: ColumnsType<ICategoryModel> = [
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
            <p className="pt-2 text-yellow-600 opacity-80 text-xs"><span className="text-black">Note: </span>SubCategory data (categoryId) also will be removed!</p>
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
    dispatch(getCategoryRequest(callbackObj(null, callback("Inside callback after get all category"))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminPage columns={columns} title="category" dataSource={categoryArr} onAdd={handleAdd} onSearch={handleSearch} />
  );
};
