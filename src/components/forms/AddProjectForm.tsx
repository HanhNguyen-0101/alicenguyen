import { DatePicker, Form, Image, Input, Select, Space } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import ReactQuill from "react-quill";
import * as Yup from "yup";
import { setCallbackDrawer } from "../../redux/actions/drawer.action";
import { callback, callbackObj } from "../global/Global";
import { addProjectRequest } from "../../redux/actions/project.action";
import { MediaState, OrganizationState, SubCategoryState } from "../../redux/reducers/root.reducer";
import { useSelector } from "react-redux";
import _ from "lodash";
import type { RangePickerProps } from 'antd/es/date-picker';
import { getSubCategoryRequest } from "../../redux/actions/subCategory.action";
import { getOrganizationRequest } from "../../redux/actions/organization.action";
import { getMediaRequest } from "../../redux/actions/media.action";
import { ISubCategoryModel } from "../../redux/types/subCategory.type";
import { IOrganizationModel } from "../../redux/types/organization.type";
import { IMediaModel } from "../../redux/types/media.type";
const { Option, OptGroup } = Select;
const { RangePicker } = DatePicker;

export const AddProjectForm: React.FC<{}> = (props: any) => {
  const dispatch = useDispatch();
  const { subCategoryArr } = useSelector((state: SubCategoryState) => state.subCategory);
  const { organizationArr } = useSelector((state: OrganizationState) => state.organization);
  const subCategoryFilter = _.filter(subCategoryArr, (i: any) => i.category.name.toLowerCase() === "project");
  const { mediaArr } = useSelector((state: MediaState) => state.media);
  const mediaFilter = _.filter(mediaArr, (i: any) => i.subCategory.name.toLowerCase() === "img");

  const handleChange = (name: string) => {
    return (value: string | number | boolean) => {
      formik.setFieldValue(name, value);
    };
  };
  const handlePickerChange = (
    value: RangePickerProps['value'],
    dateString: [string, string] | string,
  ) => {
    formik.setFieldValue("date", dateString);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      link: "",
      technical: "",
      members: "",
      organizationId: null,
      images: "",
      description: "",
      subCategoryId: null,
      date: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(200, "Max 200 characters")
        .required("The field is required"),
      organizationId: Yup.mixed()
        .required("The field is required"),
      subCategoryId: Yup.mixed()
        .required("The field is required"),
      time: Yup.mixed()
        .required("The field is required"),
    }),
    onSubmit: (values) => {
      for (let key in values) {
        if (key === "images") {
          values.images = JSON.stringify(values[key])
        }
        if (key === "date") {
          values.date = JSON.stringify(values[key])
        }
        if (key === "technical") {
          values.technical = JSON.stringify(values[key])
        }
      }
      dispatch(addProjectRequest(callbackObj(values, callback("Inside callback after add project"))));
    },
  });

  useEffect(() => {
    dispatch(getMediaRequest(callbackObj(null, callback("Inside callback after get all media"))));
    dispatch(getOrganizationRequest(callbackObj(null, callback("Inside callback after get all organization"))));
    dispatch(getSubCategoryRequest(callbackObj(null, callback("Inside callback after get all sub category"))));
    dispatch(setCallbackDrawer(formik.handleSubmit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Form
      labelCol={{
        span: 5,
      }}
      layout="horizontal"
      labelAlign="left"
      colon={false}
      className="px-4"
      onSubmitCapture={formik.handleSubmit}
    >
      <Form.Item
        className="mb-1"
        label={<span className="font-bold capitalize">name <span className="text-red-600">*</span></span>}
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
        label={<span className="font-bold capitalize">link</span>}
      >
        <Input
          name="link"
          onChange={formik.handleChange}
          value={formik.values.link}
          placeholder={"please enter..."}
        />
        {formik.errors.link ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">{formik.errors.link}</div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={<span className="font-bold capitalize">technical</span>}
      >
        <Select
          mode="tags"
          style={{ width: '100%' }}
          placeholder="Please input or select"
          onChange={handleChange("technical")}
        />
        {formik.errors.technical ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">{formik.errors.technical}</div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={<span className="font-bold capitalize">members</span>}
      >
        <Input
          name="members"
          onChange={formik.handleChange}
          value={formik.values.members}
          placeholder={"please enter..."}
        />
        {formik.errors.members ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">{formik.errors.members}</div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold capitalize">
            subCategoryId <span className="text-red-600">*</span>
          </span>
        }
      >
        <Select
          onChange={handleChange("subCategoryId")}
          value={formik.values.subCategoryId}
          placeholder="please select..."
        >
          <OptGroup label="SubCategory">
            {_.map(subCategoryFilter, ((o: ISubCategoryModel, idx: number) => {
              return (
                <Option key={idx} value={o.id}>
                  {o.name}
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
        className="mb-1"
        label={
          <span className="font-bold capitalize">
            organizationId <span className="text-red-600">*</span>
          </span>
        }
      >
        <Select
          onChange={handleChange("organizationId")}
          value={formik.values.organizationId}
          placeholder="please select..."
        >
          <OptGroup label="Organization">
            {_.map(organizationArr, ((o: IOrganizationModel, idx: number) => {
              return (
                <Option key={idx} value={o.id}>
                  {o.name}
                </Option>
              );
            }))}
          </OptGroup>
        </Select>
        {formik.errors.organizationId ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">
            {formik.errors.organizationId}
          </div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={<span className="font-bold capitalize">images</span>}
      >
        <Select
          onChange={handleChange("images")}
          mode="multiple"
          allowClear
          placeholder="please select..."
        >
          {_.map(mediaFilter, ((media: IMediaModel, idx: number) => {
            return (
              <Option key={idx} value={media.id} label={media.title}>
                <Space className="flex align-middle">
                  <Image src={media.src} alt={media.title} preview={false} width={50} />
                  <span>{media.title}</span>
                </Space>
              </Option>
            );
          }))}
        </Select>
        {formik.errors.images ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">
            {formik.errors.images}
          </div>
        ) : null}
      </Form.Item>
      <Form.Item
        className="mb-1"
        label={
          <span className="font-bold capitalize">
            time <span className="text-red-600">*</span>
          </span>
        }
      >
        <RangePicker name="date" onChange={handlePickerChange} picker="month" />
        {formik.errors.date ? (
          <div className="text-amber-600 opacity-70 pt-1 text-xs mb-2">
            {formik.errors.date}
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
    </Form>
  );
}