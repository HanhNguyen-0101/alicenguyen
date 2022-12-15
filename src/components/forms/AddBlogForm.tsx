import { Form, Image, Input, Select, Space } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import ReactQuill from "react-quill";
import * as Yup from "yup";
import { setCallbackDrawer } from "../../redux/actions/drawer.action";
import { callback, callbackObj } from "../global/Global";
import { addBlogRequest } from "../../redux/actions/blog.action";
import { MediaState, SubCategoryState } from "../../redux/reducers/root.reducer";
import { useSelector } from "react-redux";
import _ from "lodash";
import { getSubCategoryRequest } from "../../redux/actions/subCategory.action";
import { getMediaRequest } from "../../redux/actions/media.action";
import { ISubCategoryModel } from "../../redux/types/subCategory.type";
import { IMediaModel } from "../../redux/types/media.type";
const { Option, OptGroup } = Select;

export const AddBlogForm: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const { subCategoryArr } = useSelector((state: SubCategoryState) => state.subCategory);
  const { mediaArr } = useSelector((state: MediaState) => state.media);
  const subCategoryFilter = _.filter(subCategoryArr, (i: any) => i.category.name.toLowerCase() === "blog");
  const mediaFilter = _.filter(mediaArr, (i: any) => i.subCategory.name.toLowerCase() === "img");

  const handleChange = (name: string) => {
    return (value: string | number | boolean) => {
      formik.setFieldValue(name, value);
    };
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      subTitle: "",
      thumnail: null,
      description: "",
      content: "",
      subCategoryId: null,
      updatedAt: null,
      createdAt: null
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(200, "Max 200 characters")
        .required("The field is required"),
      subTitle: Yup.string()
        .max(400, "Max 400 characters"),
      thumnail: Yup.mixed()
        .required("The field is required"),
      subCategoryId: Yup.mixed()
        .required("The field is required"),
      content: Yup.mixed()
        .required("The field is required"),
    }),
    onSubmit: (values) => {
      dispatch(addBlogRequest(callbackObj(values, callback("Inside callback after add blog"))));
    },
  });

  useEffect(() => {
    dispatch(getMediaRequest(callbackObj(null, callback("Inside callback after get all media"))));
    dispatch(getSubCategoryRequest(callbackObj(null, callback("Inside callback after get all sub category"))));
    dispatch(setCallbackDrawer(formik.handleSubmit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      layout="horizontal"
      labelAlign="left"
      colon={false}
      className="px-4"
      onSubmitCapture={formik.handleSubmit}
    >
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold capitalize">
            title <span className="text-red-600">*</span>
          </span>
        }
      >
        <Input
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          placeholder={"please enter..."}
        />
        {formik.errors.title ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">{formik.errors.title}</div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold capitalize">subTitle</span>
        }
      >
        <Input
          name="subTitle"
          onChange={formik.handleChange}
          value={formik.values.subTitle}
          placeholder={"please enter..."}
        />
        {formik.errors.subTitle ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">{formik.errors.subTitle}</div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold capitalize">
            thumnail <span className="text-red-600">*</span>
          </span>
        }
      >
        <Select
          onChange={handleChange("thumnail")}
          value={formik.values.thumnail}
          placeholder="please select..."
        >
          <OptGroup label="Thumnail">
            {_.map(mediaFilter, ((media: IMediaModel, idx: number) => {
              return (
                <Option key={idx} value={media.id}>
                  <Space className="flex align-middle">
                    <Image src={media.src} alt={media.title} preview={false} width={50} />
                    <span>{media.title}</span>
                  </Space>
                </Option>
              );
            }))}
          </OptGroup>
        </Select>
        {formik.errors.thumnail ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">
            {formik.errors.thumnail}
          </div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold capitalize">
            subCategory <span className="text-red-600">*</span>
          </span>
        }
      >
        <Select
          onChange={handleChange("subCategoryId")}
          value={formik.values.subCategoryId}
          placeholder="please select..."
        >
          <OptGroup label="SubCategory">
            {_.map(subCategoryFilter, ((subCategory: ISubCategoryModel, idx: number) => {
              return (
                <Option key={idx} value={subCategory.id}>
                  {subCategory.name}
                </Option>
              );
            }))}
          </OptGroup>
        </Select>
        {formik.errors.subCategoryId ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">
            {formik.errors.subCategoryId}
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
      <Form.Item
        className="mb-1 content-quill"
        label={<span className="font-bold capitalize">content <span className="text-red-600">*</span></span>}
      >
        <ReactQuill
          theme="snow"
          onChange={handleChange("content")}
          value={formik.values.content}
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
        {formik.errors.content ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">
            {formik.errors.content}
          </div>
        ) : null}
      </Form.Item>
    </Form>
  );
}