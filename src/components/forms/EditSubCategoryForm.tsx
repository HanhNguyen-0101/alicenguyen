import { Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import ReactQuill from "react-quill";
import * as Yup from "yup";
import { CategoryState } from "../../redux/reducers/root.reducer";
import { setCallbackDrawer } from "../../redux/actions/drawer.action";
import { callback, callbackObj } from "../global/Global";
import { editSubCategoryRequest } from "../../redux/actions/subCategory.action";
import { getCategoryRequest } from "../../redux/actions/category.action";
import { ICategoryModel } from "../../redux/types/category.type";
import _ from "lodash";
import { ISubCategoryModel } from "../../redux/types/subCategory.type";
const { Option, OptGroup } = Select;

export const EditSubCategoryForm: React.FC<{ subCategory: ISubCategoryModel }> = ({ subCategory }) => {
  const dispatch = useDispatch();
  const { categoryArr } = useSelector((state: CategoryState) => state.category);

  const handleChange = (name: string) => {
    return (value: string | number) => {
      formik.setFieldValue(name, value);
    };
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: subCategory?.id,
      name: subCategory?.name,
      description: subCategory?.description,
      categoryId: subCategory?.categoryId,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(200, "Max 200 characters")
        .required("The field is required"),
      categoryId: Yup.mixed()
        .required("The field is required"),
    }),
    onSubmit: (values) => {
      dispatch(editSubCategoryRequest(callbackObj(values, callback("Inside callback after edit subCategory"))));
    },
  });

  useEffect(() => {
    dispatch(getCategoryRequest(callbackObj(null, callback("Inside callback after get all category"))));
    dispatch(setCallbackDrawer(formik.handleSubmit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form
      layout="vertical"
      labelAlign="left"
      colon={false}
      className="px-4"
      onSubmitCapture={formik.handleSubmit}
    >
      <Form.Item
        className="mb-1"
        label={<span className="font-bold uppercase">id</span>}
      >
        <Input
          name="id"
          onChange={formik.handleChange}
          value={formik.values.id}
          placeholder="please enter..."
          disabled
        />
        {formik.errors.id ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">{formik.errors.id}</div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold capitalize">
            name <span className="text-red-600">*</span>
          </span>
        }
      >
        <Input
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder={"please enter..."}
        />
        {formik.errors.name ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">{formik.errors.name}</div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold capitalize">
            category <span className="text-red-600">*</span>
          </span>
        }
      >
        <Select
          onChange={handleChange("categoryId")}
          value={formik.values.categoryId}
          placeholder="please select..."
        >
          <OptGroup label="Category">
            {_.map(categoryArr, ((category: ICategoryModel, idx: number) => {
              return (
                <Option key={idx} value={category.id}>
                  {category.name}
                </Option>
              );
            }))}
          </OptGroup>
        </Select>
        {formik.errors.categoryId ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">
            {formik.errors.categoryId}
          </div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1 content-quill"
        label={<span className="font-bold capitalize">description</span>}
      >
        <ReactQuill
          theme="snow"
          onChange={handleChange("description")}
          value={formik.values.description}
          className="h-28"
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ size: [] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              ["link", "image", "video"],
              ["clean"],
            ],
            clipboard: {
              // toggle to add extra line breaks when pasting HTML:
              matchVisual: false,
            },
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "video",
          ]}
        />
        {formik.errors.description ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">
            {formik.errors.description}
          </div>
        ) : null}
      </Form.Item>
    </Form>
  );
}